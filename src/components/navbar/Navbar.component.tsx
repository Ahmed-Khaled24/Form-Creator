import { StyledNavbar } from './Navbar.styles';
import {
	BrandNameDiv,
	LargeText,
	LinksDiv,
	SmallText,
	StyledLink,
	NavContainer1366,
} from './Navbar.styles';
type Props = {
	brand: { smallText: string; largeText: string };
	navLinks: string[];
};

const Navbar = ({ brand, navLinks }: Props) => {
	return (
		<StyledNavbar>
			<NavContainer1366>
				<BrandNameDiv>
					<SmallText> {brand.smallText} </SmallText>
					<LargeText> {brand.largeText} </LargeText>
				</BrandNameDiv>
				<LinksDiv>
					{navLinks.map((link) => (
						<StyledLink to={link.toLowerCase()}> {link} </StyledLink>
					))}
				</LinksDiv>
			</NavContainer1366>
		</StyledNavbar>
	);
};

export default Navbar;
