import { Fragment } from 'react';
import Select from './select/select.component';
import { SelectData } from '../../../../types/SelectableElementData';
import { RenderMode } from '../../../../types/FormData.type';

type Props = {
	selects: SelectData[] | undefined;
	answer: string;
	parentSegmentId: number;
	mode: RenderMode;
	updateSelect: (segmentId: number, selectId: number, data: string) => void;
	deleteSelect: (segmentId: number, selectId: number) => void;
	addNewSelect: (segmentId: number) => void;
	changeSegmentAnswer: (segmentId: number, answer: string) => void;
};

const MultiSelectBody = ({
	mode,
	selects,
	answer,
	parentSegmentId,
	updateSelect,
	deleteSelect,
	addNewSelect,
	changeSegmentAnswer,
}: Props) => {
	return (
		<Fragment>
			{selects?.map((select) => (
				<Select
					answer={answer}
					parentSegmentId={parentSegmentId}
					selectData={select}
					mode={mode}
					updateSelect={updateSelect}
					deleteSelect={deleteSelect}
					changeSegmentAnswer={changeSegmentAnswer}
				/>
			))}
			<button onClick={() => addNewSelect(parentSegmentId)}>Add</button>
		</Fragment>
	);
};

export default MultiSelectBody;
