import { Fragment } from 'react';
import { RenderMode } from '../../../../types/FormData.type';
import { SegmentType } from '../../../../types/FormSegmentData.type';
import { EditableQuestion, HeadingDiv, Question, QuestionCondition, SelectQuestionType } from './SegmentHeading.styles';
type Props = {
    question: string,
    mode: RenderMode,
    required: boolean,
    parentSegmentId: number,
	questionType: SegmentType,
    changeSegmentType: (segmentId: number, type: SegmentType) => void,
    changeQuestionText: (segmentId: number, question: string) => void,
}

const SegmentHeading = ({
	question,
	mode,
	required,
	parentSegmentId,
	questionType,
	changeSegmentType,
	changeQuestionText,
}: Props) => {
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
							Short answer
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
