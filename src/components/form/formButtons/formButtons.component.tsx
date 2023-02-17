import { RenderMode } from '../../../types/FormData.type';
import { FormButtonData } from '../../../types/FormButtonData.type';
import { FormButtonsDiv } from './formButtons.styles';
import FormButton from './formButton/button.component';

type Props = {
    mode: RenderMode,
    buttons: {
        addNewSegment: FormButtonData,
        saveAsJSON: FormButtonData,
        loadFormAsJSON: FormButtonData,
        saveAsHTML: FormButtonData
    },

}

const FormButtons = ({mode, buttons} : Props) => {
    const {addNewSegment, saveAsHTML, saveAsJSON, loadFormAsJSON} = buttons
    if(mode === RenderMode.edit){
        return (
            <FormButtonsDiv>
                <FormButton 
                    icon={addNewSegment.icon}
                    title={addNewSegment.title}
                    onClickHandler={addNewSegment.onClickHandler}
                    alt={addNewSegment.alt}
                />
                <FormButton 
                    icon={saveAsJSON.icon}
                    title={saveAsJSON.title}
                    onClickHandler={saveAsJSON.onClickHandler}
                    alt={saveAsJSON.alt}
                />
                <FormButton 
                    icon={saveAsHTML.icon}
                    title={saveAsHTML.title}
                    onClickHandler={saveAsHTML.onClickHandler}
                    alt={saveAsHTML.alt}
                />
            </FormButtonsDiv>
        )
    } else {
        return <FormButtonsDiv>
            <FormButton 
                    icon={loadFormAsJSON.icon}
                    title={loadFormAsJSON.title}
                    onClickHandler={loadFormAsJSON.onClickHandler}
                    alt={loadFormAsJSON.alt}
                />
        </FormButtonsDiv>
    }
}

export default FormButtons;