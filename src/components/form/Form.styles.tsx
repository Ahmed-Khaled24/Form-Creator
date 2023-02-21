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
    font-size: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    p {
        text-align: center;
        color: rgba(255, 255, 255, 0.2);
    }
    @media (max-width: 550px){
        font-size: 36px;
    }
`
