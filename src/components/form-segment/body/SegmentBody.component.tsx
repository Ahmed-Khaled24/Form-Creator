import { FormSegmentData, SegmentType } from '../../../types/FormSegmentData.type';
import { RenderMode } from '../../../types/FormData.type';
import { ParagraphAnswerBody, ShortAnswerBody } from './SegmentBody.styles';
import MultipleChoiceBody from './multipleChoice/multipleChoice.component';
import MultiSelectBody from './multipleSelect/multipleSelect.component';

type Props = {
	formSegmentData: FormSegmentData;
	mode: RenderMode;
	changeSegmentAnswer: (segmentId: number, answer: string) => void;
	addNewChoice: (segmentId: number) => void;
	deleteChoice: (segmentId: number, choiceId: number) => void;
	updateChoice: (segmentId: number, choiceId: number, data: string) => void;
	updateSelect: (segmentId: number, selectId: number, data: string) => void;
	deleteSelect: (segmentId: number, selectId: number) => void;
	addNewSelect: (segmentId: number) => void;
};

const SegmentBody = ({
	formSegmentData,
	mode,
	changeSegmentAnswer,
	addNewChoice,
	deleteChoice,
	updateChoice,
	updateSelect,
	deleteSelect,
	addNewSelect,
}: Props) => {
	const { id, choices, selects, answer } = formSegmentData;

	function textAnswerChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const newAnswer = e.target.value;
		changeSegmentAnswer(id, newAnswer);
	}

	switch (formSegmentData.type) {
		case SegmentType.shortAnswer: {
			return mode === RenderMode.edit ? 
				<ShortAnswerBody readOnly={true} /> : 
				<ShortAnswerBody onChange={textAnswerChangeHandler} />
			;
		}
		case SegmentType.paragraph: {
			return mode === RenderMode.edit ? 
				<ParagraphAnswerBody readOnly={true} /> : 
				<ParagraphAnswerBody onChange={textAnswerChangeHandler} />
			;
		}
		case SegmentType.multipleChoice: {
			return (
				<MultipleChoiceBody
					mode={mode}
					choices={choices}
					parentSegmentId={id}
					updateChoice={updateChoice}
					deleteChoice={deleteChoice}
					addNewChoice={addNewChoice}
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
					deleteSelect={deleteSelect}
					addNewSelect={addNewSelect}
					changeSegmentAnswer={changeSegmentAnswer}
					answer={answer}
				/>
			);
		}
	}
};

export default SegmentBody;
