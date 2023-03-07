import { FormSegmentData, SegmentType } from '../../../../types/FormSegmentData.type';
import { RenderMode } from '../../../../types/FormData.type';
import { ParagraphAnswerBody, ShortAnswerBody } from './SegmentBody.styles';
import MultipleChoiceBody from './multipleChoice/multipleChoice.component';
import MultiSelectBody from './multipleSelect/multipleSelect.component';
import { useContext } from 'react';
import { FormContext } from '../../../contexts/form.context';

type Props = {
	formSegmentData: FormSegmentData;
};

const SegmentBody = ({formSegmentData}: Props) => {
	const { id, choices, selects, answer } = formSegmentData;
	const { changeSegmentAnswer, mode} = useContext(FormContext);

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
					mode={mode}
					placeholder={
						mode === RenderMode.edit ? 'Filled in view mode' : 'Type your answer'
					}
				/>
			);
		}
		case SegmentType.paragraph: {
			return (
				<ParagraphAnswerBody
					readOnly={mode === RenderMode.edit}
					mode={mode}
					onChange={textAnswerChangeHandler}
					placeholder={
						mode === RenderMode.edit ? 'Filled in view mode' : 'Type your answer'
					}
				/>
			);
		}
		case SegmentType.multipleChoice: {
			return (
				<MultipleChoiceBody
					mode={mode}
					choices={choices}
					parentSegmentId={id}
				/>
			);
		}
		case SegmentType.multiSelect: {
			return (
				<MultiSelectBody
					mode={mode}
					selects={selects}
					parentSegmentId={id}
					answer={answer}
				/>
			);
		}
	}
};

export default SegmentBody;
