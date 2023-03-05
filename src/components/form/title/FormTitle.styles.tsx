import styled, {css} from 'styled-components';


const fontSize = 32;

const commonStyle = css`
  width: 60%;
  max-width: 800px;
  padding: 5px 20px;
  border: none;
  border-bottom: 2px solid #3A98B9;
  background-color: transparent;
  color: #495057;
  font-size: ${fontSize}px;
  @media(max-width:950px){
      width: 80%;
    }
    @media(max-width:550px){
      width: 100%;
    }
`

 export const EditableTitle = styled.input`
    &:focus-visible {
        outline: none;
    }
    ${commonStyle}
 `

 export const Title = styled.p`
    ${commonStyle}
 `