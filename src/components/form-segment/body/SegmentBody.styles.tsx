import styled from "styled-components";

const fontSize = 18;

export const ShortAnswerBody = styled.input`
    width: 100%;
    padding: 5px 10px;
    border: none;
    border-bottom: 2px solid #e9ecef;
    color: #e9ecef;
    background-color: transparent;
    font-size: ${fontSize}px;
     &:focus-visible {
        outline: none;
     }
`

export const ParagraphAnswerBody = styled.textarea`
    width: 100%;
    border: none;
    padding: 5px 10px;
    font-family: inherit;
    font-size: ${fontSize}px;
    border: none;
    resize: vertical;
    border: 2px solid #e9ecef;
    color: #e9ecef;
    background-color: transparent;
    &:focus-visible {
        outline: none;
    }
`

export const InputText = styled.input` // for choice and select
    flex: 1;
    font-size: 18px;
    padding: 5px 10px;
    background-color: transparent;
    color: #e9ecef;
    border: none;
    border-bottom: 2px solid #e9ecef;
`

export const Paragraph = styled.p` // for choice and select
    font-size: ${fontSize}px;
`

export const DeleteBtn = styled.button` // for choice and select
    color: white;
    font-size: ${fontSize}px;
    font-weight: bolder;
    font-size: 24px;
    opacity: 0.5;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 1;
    }
`

export const AddNewBtn = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    opacity: 0.7;
    color: #e9ecef;
    gap: 5px;
    width: fit-content;
    font-size: 18px;
    &:hover {
        opacity: 1;
    }
    span{
        font-size: 20px;
    }
`