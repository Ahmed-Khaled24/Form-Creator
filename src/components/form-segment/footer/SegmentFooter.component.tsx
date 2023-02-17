import { OptionalBtn, RequiredBtn, SegmentFooterDiv, DeleteSegmentBtn } from './SegmentFooter.styles';

type Props = {
    parentSegmentId: number,
    required: boolean,
    deleteSegment: (segmentId: number) => void,
	setRequired: (segmentId: number) => void,
	unsetRequired: (segmentId: number) => void
}

const SegmentFooter = ({required, parentSegmentId, deleteSegment, setRequired, unsetRequired}:Props) => {

    return (
       <SegmentFooterDiv>
            {
                required ?
                <RequiredBtn onClick={() =>{
                    unsetRequired(parentSegmentId)
                    }
                }> Required </RequiredBtn> :
                <OptionalBtn onClick={() => {
                    setRequired(parentSegmentId)}
                }> Optional </OptionalBtn>
            }
            <DeleteSegmentBtn onClick={()=>deleteSegment(parentSegmentId)}>
                <img src="" alt="delete-icon" />
            </DeleteSegmentBtn>
       </SegmentFooterDiv>
    )
}

export default SegmentFooter;