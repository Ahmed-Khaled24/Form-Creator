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
    color: #CD0404;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
`

export const OptionalBtn = styled(RequiredBtn)`
    color: #FFD93D;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
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