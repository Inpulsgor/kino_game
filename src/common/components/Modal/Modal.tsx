import { FC } from 'react';
import { Modal as InfoModal } from '@mui/material';
import { ModalProps } from './Modal.types';
import { ModalContainer } from './Modal.styles';

const Modal: FC<ModalProps> = ({ isOpen = false, handleClose, children }) => {
  return (
    <InfoModal open={isOpen} onClose={handleClose}>
      <ModalContainer>{children}</ModalContainer>
    </InfoModal>
  );
};

export default Modal;
