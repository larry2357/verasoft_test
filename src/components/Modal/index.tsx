import React, { FC } from "react";
import { ClipLoader } from "react-spinners";

import "./styles.scss";

interface ModalProps {
    hideModal: () => void,
}

const Modal: FC<ModalProps> = ({ hideModal }) => {
    return (
        <div className="modal">
            <div className="modal__overlay"></div>
            <button className="modal__btnClose" onClick={() => hideModal()}>&#x2715;</button>
            <div className="modal__content">
                <ClipLoader size={50} color="#EEEEEE" />
                <span className="modal__loadingLbl">Processing</span>
            </div>
        </div>
    )
}

export default Modal;