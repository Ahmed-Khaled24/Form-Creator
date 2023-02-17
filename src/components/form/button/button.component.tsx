import { ButtonHTMLAttributes } from 'react';

type Props = {
	icon: string;
	title: string;
	onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Btn = ({ icon, title, onClick, ...other }: Props) => {
	return (
		<button onClick={onClick} {...other} title={title}>
			<img src={icon} alt=''/>
		</button>
	);
};

export default Btn;
