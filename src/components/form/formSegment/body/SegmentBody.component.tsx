import { FormSegmentData, SegmentType } from '../../../../types/FormSegmentData.type';
import { RenderMode } from '../../../../types/FormData.type';
import { ParagraphAnswerBody, ShortAnswerBody } from './SegmentBody.styles';
import MultipleChoiceBody from './multipleChoice/multipleChoice.component';
import MultiSelectBody from './multipleSelect/multipleSelect.component';

type Props = {
	formSegmentData: FormSegmentData;
	mode: RenderMode;
	changeSegmentAnswer: (segmentId: number, answer: string) => void;
	updateChoice: (segmentId: number, choiceId: number, data: string) => void;
	updateSelect: (segmentId: number, selectId: number, data: string) => void;
	addNewSelectableElement: (segmentId: number, type: string) => void,
	deleteSelectableElement: (segmentId: number, elementId: number, type: string) => void,
};

const SegmentBody = ({
	formSegmentData,
	mode,
	changeSegmentAnswer,
	updateChoice,
	updateSelect,
	addNewSelectableElement,
	deleteSelectableElement,
}: Props) => {
	const { id, choices, selects, answer } = formSegmentData;

	function textAnswerChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const newAnswer = e.target.value;
		changeSegmentAnswer(id, newAnswer);
	}

	switch (formSegmentData.type) {
		case SegmentType.shortAnswer: {
			return (
				<ShortAnswerBody
					readOnly={mode === RenderMode.edit}
					onChange={textAnswerChangeHandler}
					style={{cursor: mode === RenderMode.edit ? 'not-allowed' : '' }}
					placeholder={mode === RenderMode.edit ? 'Filled in view mode' : 'Type your answer'}
				/>
			); 
		}
		case SegmentType.paragraph: {
			return (
				<ParagraphAnswerBody
					readOnly={mode === RenderMode.edit}
					style={{cursor: mode === RenderMode.edit ? 'not-allowed' : '' }}
					onChange={textAnswerChangeHandler}
					placeholder={mode === RenderMode.edit ? 'Filled in view mode' : 'Type your answer'}
				/>
			);
		}
		case SegmentType.multipleChoice: {
			return (
				<MultipleChoiceBody
					mode={mode}
					choices={choices}
					parentSegmentId={id}
					updateChoice={updateChoice}
					deleteChoice={deleteSelectableElement}
					addNewChoice={addNewSelectableElement}
					changeSegmentAnswer={changeSegmentAnswer}
				/>
			);
		}
		case SegmentType.multiSelect: {
			return (
				<MultiSelectBody
					mode={mode}
					selects={selects}
					parentSegmentId={id}
					updateSelect={updateSelect}
					deleteSelect={deleteSelectableElement}
					addNewSelect={addNewSelectableElement}
					changeSegmentAnswer={changeSegmentAnswer}
					answer={answer}
				/>
			);
		}
	}
};

export default SegmentBody;
