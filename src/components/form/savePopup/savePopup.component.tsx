import { Form, Modal } from "react-bootstrap"
import { PopupBtn } from '../formButtons/formButton/button.styles';
import { ModalHeader, ModalBody, ModalFooter } from './savePopup.styles';
import { useState} from 'react';


type Props = {
    show: boolean,
    saveAsJson: () => void,
    saveAsHTML: (targetLink: string) => void,
    popupShow: (show: boolean) => void, 
}

const SavePopup = ({show, saveAsJson, saveAsHTML, popupShow} : Props) => {
    const [popupType, setPopupType] = useState<string>('fullOptions'); // fullOptions or htmlSave
    const [targetLink, setTargetLink] = useState<string>('');

    function handleHTMLBtnClicked(e: React.MouseEvent<HTMLButtonElement>) {
        popupShow(false);
        setTimeout( () => setPopupType('fullOptions'), 500)
        setTimeout(() => saveAsHTML(targetLink), 1000);
    }
    function handleJSONBtnClicked(e: React.MouseEvent<HTMLButtonElement>) {
        popupShow(false);
        setTimeout( () => setPopupType('fullOptions'), 500)
        saveAsJson();
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