import { ChoiceData} from '../../../../../types/SelectableElementData';
import { RenderMode } from '../../../../../types/FormData.type';
import { ChoiceDiv, RadioInput} from './Choice.styles';
import { DeleteBtn, InputText, Paragraph } from '../../SegmentBody.styles';
import { Fragment } from 'react';

type Props = {
    mode: RenderMode,
    choiceData: ChoiceData,
    parentSegmentId: number,
    updateChoice: (segmentId: number, choiceId: number, data: string) => void,
    deleteChoice: (segmentId: number, choiceId: number) => void,
    changeSegmentAnswer: (segmentId: number, answer: string) => void,
}

const Choice = ({mode, choiceData, parentSegmentId, updateChoice, deleteChoice, changeSegmentAnswer}: Props) =>  {
    const {id, data} = choiceData;

    function handleChangeSegmentAnswer(e: React.ChangeEvent<HTMLInputElement>){
        const newAnswer = e.target.value;
        changeSegmentAnswer(parentSegmentId, newAnswer);
    }

    function handleChangeChoiceText(e: React.ChangeEvent<HTMLInputElement>){
        const newText = e.target.value;
        updateChoice(parentSegmentId, id, newText);
    }
 
    return (
		<ChoiceDiv>
			<RadioInput
				type='radio'
				value={data}
				disabled={mode === RenderMode.edit}
				name={`${parentSegmentId}`}
				onChange={handleChangeSegmentAnswer}
			/>
			{
                mode === RenderMode.edit ? 
				<Fragment>
					<InputText
						type='text'
						onChange={handleChangeChoiceText}
						value={data}
					/>
					<DeleteBtn onClick={e => deleteChoice(parentSegmentId, id)} title='Delete choice' > ✕ </DeleteBtn>
				</Fragment>
				: 
				<Paragraph>{data}</Paragraph>
			}
		</ChoiceDiv>
	);
}

export default Choice