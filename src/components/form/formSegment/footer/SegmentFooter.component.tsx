import { OptionalBtn, RequiredBtn, SegmentFooterDiv, DeleteSegmentBtn } from './SegmentFooter.styles';
import deleteIcon from '../../../../assets/delete.svg'

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
                }> required </RequiredBtn> :
                <OptionalBtn onClick={() => {
                    setRequired(parentSegmentId)}
                }> optional </OptionalBtn>
            }
            <DeleteSegmentBtn onClick={()=>deleteSegment(parentSegmentId)}>
                <img src={deleteIcon} alt="delete-icon" title='Delete question'/>
            </DeleteSegmentBtn>
       </SegmentFooterDiv>
    )
}

export default SegmentFooter;