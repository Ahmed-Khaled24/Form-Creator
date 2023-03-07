import { Fragment , useContext} from 'react';
import Select from './select/select.component';
import { SelectData } from '../../../../../types/SelectableElementData';
import { RenderMode } from '../../../../../types/FormData.type';
import { AddNewBtn } from '../SegmentBody.styles';
import { FormContext } from '../../../../contexts/form.context';

type Props = {
	selects: SelectData[] | undefined;
	answer: string;
	parentSegmentId: number;
	mode: RenderMode;
};

const MultiSelectBody = ({
	mode,
	selects,
	answer,
	parentSegmentId,
}: Props) => {
	const { addNewSelectableElement } = useContext(FormContext);
	return (
		<Fragment>
			{selects?.map((select) => (
				<Select
					key={select.id}
					answer={answer}
					parentSegmentId={parentSegmentId}
					selectData={select}
					mode={mode}
				/>
			))}

			{mode === RenderMode.edit && (
				<AddNewBtn onClick={() => addNewSelectableElement(parentSegmentId, 'select')}>
					Add new element
				</AddNewBtn>
			)}
		</Fragment>
	);
};

export default MultiSelectBody;
