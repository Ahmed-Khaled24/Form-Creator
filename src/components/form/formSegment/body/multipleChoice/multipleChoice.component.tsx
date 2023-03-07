import { Fragment, useContext } from 'react';
import { ChoiceData } from '../../../../../types/SelectableElementData';
import { RenderMode } from '../../../../../types/FormData.type';
import Choice from './choice/Choice.component';
import { AddNewBtn } from '../SegmentBody.styles';
import { FormContext } from '../../../../contexts/form.context';

type Props = {
	mode: RenderMode;
	choices: ChoiceData[] | undefined;
	parentSegmentId: number;
};

const MultipleChoiceBody = ({ mode, choices, parentSegmentId }: Props) => {
	const { addNewSelectableElement } = useContext(FormContext);
	return (
		<Fragment>
			{choices?.map((choice) => (
				<Choice
					key={choice.id}
					mode={mode}
					choiceData={choice}
					parentSegmentId={parentSegmentId}
				/>
			))}
			{mode === RenderMode.edit && (
				<AddNewBtn onClick={() => addNewSelectableElement(parentSegmentId, 'choice')}>
					Add new element
				</AddNewBtn>
			)}
		</Fragment>
	);
};

export default MultipleChoiceBody;
