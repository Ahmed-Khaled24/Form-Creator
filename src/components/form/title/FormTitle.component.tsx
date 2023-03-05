import { RenderMode } from '../../../types/FormData.type';
import { EditableTitle, Title } from './FormTitle.styles';

type Props = {
    setTitle: (title: string) => void,
    title: string,
    mode: RenderMode,
}

const FormTitle = ({setTitle, title, mode}: Props) => {

    function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>){
        const newTitle = e.target.value;
        setTitle(newTitle);
    }

    return (
        mode === RenderMode.edit ? 
            <EditableTitle
                placeholder='Type form title' 
                onChange={handleChangeTitle} 
                value={title}
            /> :
        <Title> {title} </Title>
    )
}

export default FormTitle