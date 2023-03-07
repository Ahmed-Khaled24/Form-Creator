import { Form, Modal } from "react-bootstrap"
import { PopupBtn } from '../formButtons/formButton/button.styles';
import { ModalHeader, ModalBody, ModalFooter } from './savePopup.styles';
import { useState, useContext} from 'react';
import { FormContext } from "../../contexts/form.context";


type Props = {
    show: boolean, 
    popupShow: (show: boolean) => void, 
}

const SavePopup = ({show, popupShow} : Props) => {
    const [popupType, setPopupType] = useState<string>('fullOptions'); // fullOptions or htmlSave
    const [targetLink, setTargetLink] = useState<string>('');
    const {saveFromAsHTML, saveFromAsJSON} = useContext(FormContext);

    function handleHTMLBtnClicked(e: React.MouseEvent<HTMLButtonElement>) {
        popupShow(false);
        setTimeout( () => setPopupType('fullOptions'), 500)
        setTimeout(() => saveFromAsHTML(targetLink), 1000);
    }
    function handleJSONBtnClicked(e: React.MouseEvent<HTMLButtonElement>) {
        popupShow(false);
        setTimeout( () => setPopupType('fullOptions'), 500)
        saveFromAsJSON();
    }
    function handleCancelBtnClicked(e: React.MouseEvent<HTMLButtonElement>) {
        popupShow(false);
        setTimeout( () => setPopupType('fullOptions'), 500)
    }
    
    let fullOptions = (
        <Modal centered show={show}>
            <ModalHeader>
                <Modal.Title>
                    Export form
                </Modal.Title>
            </ModalHeader>
            <ModalBody>
                Choose how to export your form
            </ModalBody>
            <ModalFooter>
                <PopupBtn onClick={() => setPopupType('htmlSave')} title='HTML'> HTML </PopupBtn>
                <PopupBtn onClick={handleJSONBtnClicked} title='json'> JSON </PopupBtn>
                <PopupBtn onClick={handleCancelBtnClicked} title='Cancel'> Cancel </PopupBtn>
            </ModalFooter>
        </Modal>
    )

    let htmlSave = (
        <Modal centered show={show}>
            <ModalHeader>
                <Modal.Title>
                    HTML Export
                </Modal.Title>
            </ModalHeader>
            <ModalBody>
                <Form.Group>
                    <Form.Label>Add link to send the submits to</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Add your link..." 
                        onChange={(e) => setTargetLink(e.target.value)}
                    />
                </Form.Group>   
            </ModalBody>
            <ModalFooter>
                <PopupBtn onClick={handleHTMLBtnClicked} title='HTML'> Export </PopupBtn>
                <PopupBtn onClick={() => {setPopupType('fullOptions')}} title='Return to previous'> Back </PopupBtn>
                <PopupBtn onClick={handleCancelBtnClicked} title='Cancel'> Cancel </PopupBtn>
            </ModalFooter>
        </Modal>
    )

    if(popupType === 'fullOptions'){
        return fullOptions;
    } else {
        return htmlSave;
    }
}

export default SavePopup;