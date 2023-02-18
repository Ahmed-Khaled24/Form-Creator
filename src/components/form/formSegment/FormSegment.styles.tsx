import styled from 'styled-components';

export const SegmentDiv = styled.div`
    width: 60%;
    max-width: 800px;
    border-radius: 5px;
    background-color: #313644;
    padding: 20px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media(max-width:950px){
      width: 80%;
    }
`