import { Fragment } from 'react';
import { RenderMode } from '../../../types/FormData.type';
import { SegmentType } from '../../../types/FormSegmentData.type';
import { EditableQuestion, HeadingDiv, Question, QuestionCondition, SelectQuestionType } from './SegmentHeading.styles';
import shortAnswerIcon from '../../../assets/short answer.svg'
type Props = {
    question: string,
    mode: RenderMode,
    required: boolean,
    parentSegmentId: number,
    changeSegmentType: (segmentId: number, type: SegmentType) => void,
    changeQuestionText: (segmentId: number, question: string) => void,
}

const SegmentHeading = ({question, mode, required, parentSegmentId, changeSegmentType, changeQuestionText}: Props) => {

    function handleChangeQuestionType(e: React.ChangeEvent<HTMLSelectElement>){
        const newType = Number(e.target.value);
        changeSegmentType(parentSegmentId, newType);
    }

    function handleChangeQuestionText(e: React.ChangeEvent<HTMLInputElement>){
        const newQuestion = e.target.value;
        changeQuestionText(parentSegmentId, newQuestion);
    }

    return (
        <HeadingDiv>
            {
                mode === RenderMode.edit ? 
                    <Fragment>
                        <EditableQuestion type='text' placeholder='Type your question' onChange={handleChangeQuestionText}/>
                        <SelectQuestionType onChange={handleChangeQuestionType}>
                            <option value={SegmentType.shortAnswer}> 
                                short answer 
                            </option>
                            <option value={SegmentType.paragraph}> 
                                paragraph 
                            </option>
                            <option value={SegmentType.multipleChoice}>
                                multiple choice 
                            </option>
                            <option value={SegmentType.multiSelect}>
                                multi select
                            </option>
                        </SelectQuestionType>
                    </Fragment> : 
                    <Fragment>
                        <Question> {question} </Question>
                        <QuestionCondition> {required?'Required':'Optional'} </QuestionCondition>
                    </Fragment> 
            }
        </HeadingDiv>
    )
}

export default SegmentHeading;