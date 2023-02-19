import styled from 'styled-components';
import { Modal } from 'react-bootstrap';


export const ModalHeader = styled(Modal.Header)`
    background-color: #313644;
    color: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const ModalBody = styled(Modal.Body)`
    background-color: #313644;
    color: white;
`

export const ModalFooter = styled(Modal.Footer)`
    background-color: #313644;
    color: white;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`