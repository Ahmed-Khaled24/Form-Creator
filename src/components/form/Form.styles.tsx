import styled from 'styled-components';

export const FormBody = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 50px 0;
    flex: 1;
    align-items: center;
`;

export const EmptyFromPlaceHolder = styled.div`
    font-size: 50px;
    font-family: cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    p {
        text-align: center;
        color: #3a97b971;
    }
    @media (max-width: 550px){
        font-size: 36px;
    }
`
