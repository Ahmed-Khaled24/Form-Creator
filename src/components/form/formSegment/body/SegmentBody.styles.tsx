import styled, { css } from "styled-components";
import { RenderMode } from "../../../../types/FormData.type";

const fontSize = 18;

const EditModeStyles = css`
    cursor: not-allowed;
    background-color: transparent;
`

export const ShortAnswerBody = styled.input`
    width: 100%;
    padding: 5px 10px;
    border: none;
    border-bottom: 1px solid #3A98B9;
    border-radius: 5px;
    font-size: ${fontSize}px;
    ${({mode}:{mode: RenderMode}) => mode === RenderMode.edit && EditModeStyles};

    &:focus-visible {
    outline: none;
    }
`

export const ParagraphAnswerBody = styled.textarea`
    width: 100%;
    padding: 5px 10px;
    font-family: inherit;
    font-size: ${fontSize}px;
    resize: vertical;
    border: none;
    border-bottom: 1px solid #3A98B9;
    border-radius: 5px;
    ${({mode}:{mode: RenderMode}) => mode === RenderMode.edit && EditModeStyles};
    &:focus-visible {
        outline: none;
    }
`

export const InputText = styled.input` // for choice and select
    flex: 1;
    font-size: 18px;
    padding: 5px 10px;
    color: #495057;
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid #3A98B9;
    min-width: 100px;
`

export const Paragraph = styled.p` // for choice and select
    font-size: ${fontSize}px;
    color: #495057;
    flex: 1;
    border-bottom: 1px solid #3A98B9;
    padding: 5px 10px;
`

export const DeleteBtn = styled.button` // for choice and select
    color: #495057;
    font-size: ${fontSize}px;
    font-weight: bolder;
    font-size: 24px;
    opacity: 0.7;
    background-color: transparent;
    border: none;
    &:hover {
        opacity: 1;
    }
`

export const AddNewBtn = styled.button`
    display: flex;
    justify-content: center;
    justify-self: center;
    align-self: center;
    background-color: transparent;
    border: 2px solid #868e96;
    border-radius: 5px;
    padding: 3px 30px;
    width: fit-content;
    opacity: 0.7;
    color: #868e96;
    gap: 10px;
    font-size: 18px;
    &:hover {
        opacity: 1;
    }
    span{
        font-size: 24px;
    }
`