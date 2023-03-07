import { ChoiceData} from '../../../../../../types/SelectableElementData';
import { RenderMode } from '../../../../../../types/FormData.type';
import { ChoiceDiv, RadioInput} from './Choice.styles';
import { DeleteBtn, InputText, Paragraph } from '../../SegmentBody.styles';
import { Fragment, useContext } from 'react';
import { FormContext } from '../../../../../contexts/form.context';

type Props = {
    mode: RenderMode,
    choiceData: ChoiceData,
    parentSegmentId: number,
}

const Choice = ({mode, choiceData, parentSegmentId}: Props) =>  {
    const {id, data} = choiceData;
	const { updateSelectableElement, deleteSelectableElement, changeSegmentAnswer } = useContext(FormContext);

    function handleChangeSegmentAnswer(e: React.ChangeEvent<HTMLInputElement>){
        const newAnswer = e.target.value;
        changeSegmentAnswer(parentSegmentId, newAnswer);
    }

    function handleChangeChoiceText(e: React.ChangeEvent<HTMLInputElement>){
        const newText = e.target.value;
        updateSelectableElement(parentSegmentId, id, newText, 'choice');
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
					<DeleteBtn onClick={e => deleteSelectableElement(parentSegmentId, id, 'choice')} title='Delete choice' > ✕ </DeleteBtn>
				</Fragment>
				: 
				<Paragraph>{data}</Paragraph>
			}
		</ChoiceDiv>
	);
}

export default Choice