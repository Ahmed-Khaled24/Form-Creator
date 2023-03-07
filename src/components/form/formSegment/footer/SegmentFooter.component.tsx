import { useContext } from 'react';
import { OptionalBtn, RequiredBtn, SegmentFooterDiv, DeleteSegmentBtn } from './SegmentFooter.styles';
import { FormContext } from '../../../contexts/form.context';

type Props = {
    parentSegmentId: number,
    required: boolean,
}

const SegmentFooter = ({ required, parentSegmentId}: Props) => {
	const { deleteSegment, toggleRequired } = useContext(FormContext);
    let toggleRequiredButton: JSX.Element;
    if (required) {
		toggleRequiredButton = (
			<RequiredBtn
				onClick={() => {
					toggleRequired(parentSegmentId);
				}}
				title='Change to optional'
			>
				Required
			</RequiredBtn>
		);
	} else {
		toggleRequiredButton = (
			<OptionalBtn
				onClick={() => {
					toggleRequired(parentSegmentId);
				}}
				title='change to required'
			>
				Optional
			</OptionalBtn>
		);
	}

	return (
		<SegmentFooterDiv>
			{toggleRequiredButton}
			<DeleteSegmentBtn onClick={() => deleteSegment(parentSegmentId)} title='Delete question'>
				<span className='material-symbols-rounded'> delete </span>
			</DeleteSegmentBtn>
		</SegmentFooterDiv>
	);
};

export default SegmentFooter;