import { OptionalBtn, RequiredBtn, SegmentFooterDiv, DeleteSegmentBtn } from './SegmentFooter.styles';

type Props = {
    parentSegmentId: number,
    required: boolean,
    deleteSegment: (segmentId: number) => void,
    toggleRequired: (segmentId: number) => void
}

const SegmentFooter = ({ required, parentSegmentId, deleteSegment, toggleRequired }: Props) => {
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