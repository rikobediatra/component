import { useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPages() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>  
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here its the aggreement that u must accept !!</p>
    </Modal>
 
    return (
        <div>
            <Button onClick={handleClick} primary>Show Modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPages;