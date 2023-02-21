import styled from "styled-components";

export const HeadingDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 10px;
    @media (max-width: 550px){
        flex-direction: column;
        align-items: stretch;
    }
`

export const EditableQuestion = styled.input`
    border: none;
    font-family: inherit;
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 5px;
    flex: 1;
`

export const SelectQuestionType = styled.select`
    border-radius: 5px;
    padding: 5px 10px;
    width: 30%;
    font-size: 18px;
    @media (max-width: 550px){
        width: 100%;
    }

`

export const Question = styled.p`
    font-size: 32px;
    color: #e9ecef;
    letter-spacing: -1px;
`

export const QuestionCondition = styled.p`
    font-size: 14px;
`