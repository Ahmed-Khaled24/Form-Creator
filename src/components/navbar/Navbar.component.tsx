import { RenderMode } from '../../types/FormData.type';
import { Fragment, useState } from 'react';
import { VerticalNav } from './Navbar.styles';
import {
	BrandNameDiv,
	LargeText,
	LinksDiv,
	SmallText,
	NavButton,
	Nav, 
	HamburgerBtn
} from './Navbar.styles';
type Props = {
	brand: { smallText: string; largeText: string };
	navLinks: string[];
	changeMode: (mode: RenderMode) => void;
};

const Navbar = ({ brand, navLinks, changeMode }: Props) => {
	const [mobileNavState, setMobileNavState] = useState<string>('closed')
	function toggleMobileNav(){
		if(mobileNavState === 'opened'){
			setMobileNavState('closed');
		} else {
			setMobileNavState('opened');
		}
	}

	const links = navLinks.map((link) => (
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
	));
	const brandName = (
		<BrandNameDiv>
			<SmallText> {brand.smallText} </SmallText>
			<LargeText> {brand.largeText} </LargeText>
		</BrandNameDiv>
	)

	return (
		<VerticalNav>
			<Nav>
				{brandName}
				<HamburgerBtn className="material-symbols-rounded" onClick={toggleMobileNav}>menu</HamburgerBtn>
				<LinksDiv> {links} </LinksDiv>
			</Nav>
				{
					mobileNavState === 'opened' &&
					<VerticalNav>
						{links}
					</VerticalNav>
				}
		</VerticalNav>
	);
};

export default Navbar;
