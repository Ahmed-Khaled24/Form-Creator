import { FormSegmentData, SegmentType } from '../../../types/FormSegmentData.type';
import { RenderMode } from '../../../types/FormData.type';
import { ParagraphAnswerBody, ShortAnswerBody } from './SegmentBody.styles';
import { ChoiceData } from '../../../types/SelectableElementData';
import Choice from './multipleChoice/choice/Choice.component';
import { Fragment } from 'react';
import Select from './multipleSelect/select/select.component';

type Props = {
    formSegmentData: FormSegmentData,
    mode: RenderMode,
    changeSegmentAnswer: (segmentId: number, answer: string) => void,
    addNewChoice: (segmentId: number) => void,
	deleteChoice: (segmentId: number, choiceId: number) => void,
	updateChoice: (segmentId: number, choiceId: number, data: string) => void,
	updateSelect: (segmentId: number, selectId: number, data: string) => void,
	deleteSelect: (segmentId: number, selectId: number) => void,
	addNewSelect: (segmentId: number) => void,
}

const SegmentBody = ({formSegmentData, mode, changeSegmentAnswer, addNewChoice, deleteChoice, updateChoice, updateSelect, deleteSelect, addNewSelect}: Props) => {
    const { question, type, id, required, choices, selects, answer } = formSegmentData;

    function textAnswerChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const newAnswer = e.target.value;
        changeSegmentAnswer(id, newAnswer)
    }
    
    switch (formSegmentData.type) {
		case SegmentType.shortAnswer: {
			return mode === RenderMode.edit ? (
				<ShortAnswerBody readOnly={true} />
			) : (
				<ShortAnswerBody onChange={textAnswerChangeHandler} />
			);
		}
		case SegmentType.paragraph: {
			return mode === RenderMode.edit ? (
				<ParagraphAnswerBody readOnly={true} />
			) : (
				<ParagraphAnswerBody onChange={textAnswerChangeHandler} />
			);
		}
		case SegmentType.multipleChoice: {
			return( 
				<Fragment>
					{choices?.map((choice) => (
						<Choice
							mode={mode}
							choiceData={choice}
							parentSegmentId={id}
							updateChoice={updateChoice}
							deleteChoice={deleteChoice}
							changeSegmentAnswer={changeSegmentAnswer}
						/>
					))}
					<button 
						onClick={() => addNewChoice(id)} 
						style={{display: 'visible'}}>
						 Add 
					</button>
				</Fragment>
			)
		}
		case SegmentType.multiSelect: {
			return (
				<Fragment>
					{selects?.map((select) => (
						<Select
							answer={answer}
							parentSegmentId={id}
							selectData={select}
							mode={mode}
							updateSelect={updateSelect}
							deleteSelect={deleteSelect}
							changeSegmentAnswer={changeSegmentAnswer}
						/>
					))}
					<button 
						onClick={() => addNewSelect(id)} 
						style={{display: 'visible'}}>
						 Add 
					</button>
				</Fragment>
			);
		}
	}
}

export default SegmentBody;