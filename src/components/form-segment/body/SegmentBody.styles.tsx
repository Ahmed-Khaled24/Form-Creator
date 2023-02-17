import styled from "styled-components";

const fontSize = 18;

export const ShortAnswerBody = styled.input`
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: ${fontSize}px;
     &:focus-visible {
        outline: none;
     }
`

export const ParagraphAnswerBody = styled.textarea`
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: ${fontSize}px;
    resize: vertical;
    &:focus-visible {
        outline: none;
    }
`

export const InputText = styled.input` // for choice and select
    border-radius: 5px;
    border: none;
    font-size: 18px;
`

export const Paragraph = styled.p` // for choice and select
    font-size: 18px;
`

export const DeleteBtn = styled.button` // for choice and select
    color: white;
    font-size: 18px;
    font-weight: 700;
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