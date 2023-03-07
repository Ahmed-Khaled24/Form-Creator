import { useContext } from 'react';
import { RenderMode } from '../../../types/FormData.type';
import { EditableTitle, Title } from './FormTitle.styles';
import { FormContext } from '../../contexts/form.context';

const FormTitle = () => {
    const { changeFormTitle, formData, mode } = useContext(FormContext);
    const{title} = formData;

    function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>){
        const newTitle = e.target.value;
        changeFormTitle(newTitle);
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