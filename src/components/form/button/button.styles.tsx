import styled from 'styled-components';
import Btn from './button.component';

const spaceFromEdge = 30;
const iconDimensions = 35;

export const FormBtn = styled(Btn)`
    padding: 15px;
    position: absolute;
    right: ${spaceFromEdge}px;
    background-color: #82A7A6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    cursor: pointer;
    transition-timing-function: linear;
    transition-property: background-color;
    transition-duration: 0.5s;
    
    &:hover {
        background-color: #313644
    }

    img {
        width: ${iconDimensions}px;
        height: ${iconDimensions}px;
    }
`

export const AddBtn = styled(FormBtn)`
    bottom: ${spaceFromEdge}px;
`

export const SaveBtn = styled(FormBtn)`
    bottom: ${spaceFromEdge+85}px;
`