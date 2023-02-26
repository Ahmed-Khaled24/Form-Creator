import styled from 'styled-components';


const width = 900;
const fontSize = 32;

 export const EditableTitle = styled.input`
    width: 60%;
    max-width: 800px;
    padding: 5px 20px;
    border: none;
    border-bottom: 2px solid #3A98B9;
    background-color: transparent;
    color: #495057;
    font-size: ${fontSize}px;

    &:focus-visible {
        outline: none;
    }

    @media(max-width:950px){
      width: 80%;
    }
    @media(max-width:550px){
      width: 100%;
    }
 `

 export const Title = styled.p`
    width: 60%;
    max-width: 800px;
    padding: 5px 20px;
    border: none;
    border-bottom: 2px solid #3A98B9;
    background-color: transparent;
    color: #495057;
    font-size: ${fontSize}px;
    letter-spacing: -1px;
    @media(max-width:950px){
      width: 80%;
    }
    @media(max-width:550px){
      width: 100%;
    }
 `