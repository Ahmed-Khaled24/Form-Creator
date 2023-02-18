import styled from 'styled-components';


export const LinksDiv = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
`;

export const BrandNameDiv = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1;
    letter-spacing: -1px;
`;

export const SmallText = styled.p`
    font-size: 18px;
`;

export const LargeText = styled.p`
    font-size: 32px;
    font-weight: 700;
`;

export const NavButton = styled.button`
    text-decoration: none;
    color: inherit;
    border: none;
    font-size: 18px;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
    opacity: 0.7;
    &:hover{
        opacity: 1;
    }
`;

export const NavContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
`;

export const Nav = styled.div`
    background-color: #313644;
    display: flex;
    width: 100%;
    color: white;
    justify-content: center;
`;