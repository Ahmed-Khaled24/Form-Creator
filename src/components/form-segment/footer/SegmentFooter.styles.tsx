import styled from 'styled-components';


export const SegmentFooterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const transparentBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`
export const RequiredBtn = styled(transparentBtn)`
    font-size: 16px;
    font-weight: 500; 
    color: #CD0404;
`

export const OptionalBtn = styled(RequiredBtn)`
    color: #FFD93D;
`

export const DeleteSegmentBtn = styled(transparentBtn)`
    opacity: 0.7;

    img {
        width: 24px;
        height: 24px;
    }

    &:hover {
        opacity: 1;
    }
`