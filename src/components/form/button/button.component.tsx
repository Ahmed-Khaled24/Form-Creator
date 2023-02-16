import { ButtonHTMLAttributes } from 'react';

type Props = {
	icon: string;
	alt: string;
	onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Btn = ({ icon, alt, onClick, ...other }: Props) => {
	return (
		<button onClick={onClick} {...other}>
			<img src={icon} alt={alt} />
		</button>
	);
};

export default Btn;
