import styled from "styled-components";

export const HeadingDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
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
    align-self: stretch;
`

export const Question = styled.p`
    font-size: 32px;
    color: #e9ecef;
    letter-spacing: -1px;
`

export const QuestionCondition = styled.p`
    font-size: 14px;
`