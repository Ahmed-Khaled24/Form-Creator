import { Fragment, useContext} from 'react';
import { SegmentType } from '../../../../types/FormSegmentData.type';
import { EditableQuestion, HeadingDiv, Question, QuestionCondition, SelectQuestionType } from './SegmentHeading.styles';
import { FormContext } from '../../../contexts/form.context';
import { RenderMode } from '../../../../types/FormData.type';
type Props = {
    question: string,
    required: boolean,
    parentSegmentId: number,
	questionType: SegmentType,
}

const SegmentHeading = ({
	question,
	required,
	parentSegmentId,
	questionType }: Props) => {
	const {changeQuestionText, changeSegmentType, mode} = useContext(FormContext);
	
	function handleChangeQuestionType(e: React.ChangeEvent<HTMLSelectElement>) {
		const newType = Number(e.target.value);
		changeSegmentType(parentSegmentId, newType);
	}
	function handleChangeQuestionText(e: React.ChangeEvent<HTMLInputElement>) {
		const newQuestion = e.target.value;
		changeQuestionText(parentSegmentId, newQuestion);
	}

	return (
		<HeadingDiv>
			{mode === RenderMode.edit ? (
				<Fragment>
					<EditableQuestion
						type='text'
						placeholder='Type your question'
						onChange={handleChangeQuestionText}
						value={question}
					/>
					<SelectQuestionType onChange={handleChangeQuestionType}>
						<option
							value={SegmentType.shortAnswer}
							selected={questionType === SegmentType.shortAnswer}
						>
							Short Answer
						</option>
						<option
							value={SegmentType.paragraph}
							selected={questionType === SegmentType.paragraph}
						>
							Paragraph
						</option>
						<option
							value={SegmentType.multipleChoice}
							selected={questionType === SegmentType.multipleChoice}
						>
							Multiple Choice
						</option>
						<option
							value={SegmentType.multiSelect}
							selected={questionType === SegmentType.multiSelect}
						>
							Multi Select
						</option>
					</SelectQuestionType>
				</Fragment>
			) : (
				<Fragment>
					<Question> {question} </Question>
					<QuestionCondition required={required}>
						{required ? 'Required' : 'Optional'}
					</QuestionCondition>
				</Fragment>
			)}
		</HeadingDiv>
	);
};

export default SegmentHeading;
