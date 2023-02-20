import styled from 'styled-components';

export const FormBtn = styled.button`
    padding: 15px;
    background-color: #82A7A6;
    border-radius: 50%;
    border: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    cursor: pointer;
    transition-timing-function: linear;
    transition-property: background-color;
    transition-duration: 0.5s;
    &:hover {
        background-color: #3d5756
    }
    span {
        display: flex;
        alight-items: center;
        justify-content: center;
        font-size: 32px;
        color: white;
    }
    @media(max-width:950px){
        padding: 10px;
    }
`

export const PopupBtn = styled.button`
    padding: 6px 12px;
    font-weight: 500;
    color: white;
    font-size: 18px;
    transition-timing-function: linear;
    transition-property: background-color;
    transition-duration: 0.5s;
    background-color: #82A7A6;
    &:hover {
        background-color: #3d5756
    }
    border: none;
    border-radius: 5px;
`