import { FormBtn } from './button.styles';
type Props = {
	icon: string;
	title: string;
	alt: string;
	onClickHandler: () => void;
};

const FormButton = ({ icon, title, onClickHandler, alt }: Props) => {
	return (
		<FormBtn onClick={onClickHandler} title={title}>
			<img src={icon} alt={alt} />
		</FormBtn>
	);
};

export default FormButton;
