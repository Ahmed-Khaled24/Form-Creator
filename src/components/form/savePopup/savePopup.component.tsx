import { Modal } from "react-bootstrap"
import { PopupBtn } from '../formButtons/formButton/button.styles';
import { ModalHeader, ModalBody, ModalFooter } from './savePopup.styles';


type Props = {
    show: boolean,
    saveAsJson: () => void,
    saveAsHTML: () => void,
    popupShow: (show: boolean) => void, 
}

const SavePopup = ({show, saveAsJson, saveAsHTML, popupShow} : Props) => {

    function handleHTMLBtnClicked(e: React.MouseEvent<HTMLButtonElement>) {
        popupShow(false);
        setTimeout(saveAsHTML, 1000);
    }
    function handleJSONBtnClicked(e: React.MouseEvent<HTMLButtonElement>) {
        popupShow(false);
        saveAsJson();
    }
    function handleCancelBtnClicked(e: React.MouseEvent<HTMLButtonElement>) {
        saveAsHTML();
    }
    
    return (
        <Modal centered show={show} >
            <ModalHeader >
                <Modal.Title>
                    Export form
                </Modal.Title>
            </ModalHeader>
            <ModalBody>
                Choose how to export your form
            </ModalBody>
            <ModalFooter>
                <PopupBtn onClick={handleHTMLBtnClicked} title='HTML'> HTML </PopupBtn>
                <PopupBtn onClick={handleJSONBtnClicked} title='JSON'> JSON </PopupBtn>
                <PopupBtn onClick={handleCancelBtnClicked} title='Cancel'> Cancel </PopupBtn>
            </ModalFooter>
        </Modal>
    )
}
export default SavePopup;