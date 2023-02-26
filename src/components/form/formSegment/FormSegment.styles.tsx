import styled from 'styled-components';

export const SegmentDiv = styled.div`
    width: 60%;
    max-width: 800px;
    border-radius: 5px;
    background-color: #E8D5C4;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media(max-width:950px){
      width: 100%;
    }
    :last-child{
      margin-bottom: 50px;
    }
`