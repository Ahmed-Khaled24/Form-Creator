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
			<span className="material-symbols-rounded">
				{icon}
			</span>
		</FormBtn>
	);
};

export default FormButton;
