import styled from 'styled-components';


export const LinksDiv = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    @media (max-width: 550px){
        display: none;
    }
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
    @media (max-width: 550px){
        font-size: 20px;
    }
`;

export const Nav = styled.div`
    background-color: #313644;
    display: flex;
    padding: 10px 50px;
    width: 100%;
    color: white;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 550px){
        padding: 20px;
    }  
`;

export const HamburgerBtn = styled.span`
    font-size: 48px;
    visibility: hidden;
    @media (max-width: 550px){
        visibility: visible;
    }
`

export const VerticalNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    background-color: #313644;
    :last-child {
        padding-bottom: 30px;
    } 
    color: white;
`