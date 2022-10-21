import React from 'react';
import ModalFrame from '../components/ModalFrame';

const Modal = ({ _handleModal }) => {
    return (
        <ModalFrame _handleModal={_handleModal}>
            <h1>프로젝트 내용</h1>
        </ModalFrame>
    );
};

export default Modal;