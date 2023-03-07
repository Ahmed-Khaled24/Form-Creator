import { SelectData } from "../../../../../../types/SelectableElementData";
import { RenderMode } from '../../../../../../types/FormData.type';
import { SelectDiv, Checkbox } from './select.styles';
import { DeleteBtn, InputText, Paragraph } from '../../SegmentBody.styles';
import { Fragment } from "react";
import {useContext} from 'react';
import { FormContext } from "../../../../../contexts/form.context";

type Props = {
    parentSegmentId: number,
    selectData: SelectData,
    answer: string,
    mode: RenderMode,
}

const Select = ({
	parentSegmentId,
	selectData,
	mode,
	answer,
}: Props) => {
	const { id, data } = selectData;
	const { changeSegmentAnswer, updateSelectableElement, deleteSelectableElement} = useContext(FormContext);

	function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
		const elementData = e.target.value;
		let newAnswer = answer.split(' & ');
		if (e.target.checked) {
			newAnswer.push(elementData);
		} else {
			newAnswer = newAnswer.filter((ans) => ans !== elementData);
		}
		changeSegmentAnswer(parentSegmentId, newAnswer.join(' & '));
	}
	
	function handleChangeSelectText(e: React.ChangeEvent<HTMLInputElement>) {
		const newElementData = e.target.value;
		updateSelectableElement(parentSegmentId, id, newElementData, 'select');
	}

	return (
		<SelectDiv>
			<Checkbox
				type='checkbox'
				value={data}
				disabled={mode === RenderMode.edit}
				onChange={handleCheckboxChange}
			/>
			{mode === RenderMode.edit ? (
				<Fragment>
					<InputText type='text' onChange={handleChangeSelectText} value={data}/>
					<DeleteBtn onClick={(e) => deleteSelectableElement(parentSegmentId, id, 'select')} title="Delete element"> ✕ </DeleteBtn>
				</Fragment>
			) : (
				<Paragraph> {data} </Paragraph>
			)}
		</SelectDiv>
	);
};

export default Select;