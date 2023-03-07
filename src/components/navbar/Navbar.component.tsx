import { RenderMode } from '../../types/FormData.type';
import { useContext, useState } from 'react';
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
import { FormContext } from '../contexts/form.context';
type Props = {
	brand: { smallText: string; largeText: string };
	navLinks: string[];
};

const Navbar = ({ brand, navLinks}: Props) => {
	const { changeRenderMode } = useContext(FormContext);
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
					? changeRenderMode(RenderMode.edit)
					: changeRenderMode(RenderMode.view);
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

	return (
		<VerticalNav>
			<Nav>
				<BrandNameDiv>
					<SmallText> {brand.smallText} </SmallText>
					<LargeText> {brand.largeText} </LargeText>
				</BrandNameDiv>
				<HamburgerBtn className='material-symbols-rounded' onClick={toggleMobileNav}>
					menu
				</HamburgerBtn>
				<LinksDiv> {links} </LinksDiv>
			</Nav>
			{mobileNavState === 'opened' && <VerticalNav>{links}</VerticalNav>}
		</VerticalNav>
	);
};

export default Navbar;
