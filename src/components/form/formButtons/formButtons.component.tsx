import { RenderMode } from '../../../types/FormData.type';
import { FormButtonData } from '../../../types/FormButtonData.type';
import { FormButtonsDiv } from './formButtons.styles';
import FormButton from './formButton/button.component';

type Props = {
    mode: RenderMode,
    buttons: {
        addNewSegment: FormButtonData,
        export: FormButtonData
        loadFormAsJSON: FormButtonData,
    },
    popupShow: (show: boolean) => void
}

const FormButtons = ({mode, buttons, popupShow} : Props) => {
    const {addNewSegment, export: exportBtn, loadFormAsJSON} = buttons
    if(mode === RenderMode.edit){
        return (
            <FormButtonsDiv>
                <FormButton 
                    icon={addNewSegment.icon}
                    title={addNewSegment.title}
                    onClickHandler={addNewSegment.onClickHandler}
                    alt={addNewSegment.alt}
                />
            </FormButtonsDiv>
        )
    } else {
        return <FormButtonsDiv>
            <FormButton 
                    icon={exportBtn.icon}
                    title={exportBtn.title}
                    onClickHandler={exportBtn.onClickHandler}
                    alt={exportBtn.alt}
                />
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