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
    color: red;
`

export const OptionalBtn = styled(RequiredBtn)`
    color: blue;
`

export const DeleteSegmentBtn = styled(transparentBtn)`
    
`