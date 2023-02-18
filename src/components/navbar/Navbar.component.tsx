import { Nav } from './Navbar.styles';
import { RenderMode } from '../../types/FormData.type';
import {
	BrandNameDiv,
	LargeText,
	LinksDiv,
	SmallText,
	NavButton,
	NavContainer,
} from './Navbar.styles';
type Props = {
	brand: { smallText: string; largeText: string };
	navLinks: string[];
	changeMode: (mode: RenderMode) => void;
};

const Navbar = ({ brand, navLinks, changeMode }: Props) => {
	return (
		<Nav>
			<NavContainer>
				<BrandNameDiv>
					<SmallText> {brand.smallText} </SmallText>
					<LargeText> {brand.largeText} </LargeText>
				</BrandNameDiv>
				<LinksDiv>
					{navLinks.map((link) => (
						<NavButton
							onClick={(e) => {
								link.toLowerCase() === 'creator'
									? changeMode(RenderMode.edit)
									: changeMode(RenderMode.view);
							}}
							title={
								link.toLowerCase() === 'creator'
									? 'Go to edit mode'
									: 'Go to view mode'
							}
						>			
							{link}
						</NavButton>
					))}
				</LinksDiv>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;
