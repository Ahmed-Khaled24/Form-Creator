import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinksDiv = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    color: 
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

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const NavContainer1366 = styled.div`
    width: 1366px;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;

`;

export const StyledNavbar = styled.div`
    background-color: #313644;
    display: flex;
    width: 100vw;
    color: white;
    justify-content: center;
`;