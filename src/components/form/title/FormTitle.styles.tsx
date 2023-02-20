import styled from 'styled-components';


const width = 900;
const fontSize = 32;

 export const EditableTitle = styled.input`
    width: 60%;
    max-width: 800px;
    padding: 5px 20px;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    color: white;
    font-size: ${fontSize}px;

    &:focus-visible {
        outline: none;
    }

    @media(max-width:950px){
      width: 80%;
    }
 `

 export const Title = styled.p`
    width: 60%;
    max-width: 800px;
    padding: 5px 20px;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    color: #e9ecef;
    font-size: ${fontSize}px;
    letter-spacing: -1px;
    @media(max-width:950px){
      width: 80%;
    }
 `