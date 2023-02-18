import { StyledNavbar } from './Navbar.styles';
import { RenderMode } from '../../types/FormData.type';
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
	changeMode: (mode: RenderMode) => void;
};

const Navbar = ({ brand, navLinks, changeMode }: Props) => {
	return (
		<StyledNavbar>
			<NavContainer1366>
				<BrandNameDiv>
					<SmallText> {brand.smallText} </SmallText>
					<LargeText> {brand.largeText} </LargeText>
				</BrandNameDiv>
				<LinksDiv>
					{navLinks.map((link) => (
						<StyledLink onClick={
							(e) => {
								link.toLowerCase() === 'creator' ? 
								changeMode(RenderMode.edit) :
								changeMode(RenderMode.view)
							}
						}> {link} </StyledLink>
					))}
				</LinksDiv>
			</NavContainer1366>
		</StyledNavbar>
	);
};

export default Navbar;
