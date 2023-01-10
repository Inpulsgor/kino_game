import { FC } from 'react';
import { Modal as MuiModal } from '@mui/material';
import { ModalProps } from './Modal.types';
import { ModalContainer } from './Modal.styles';

const Modal: FC<ModalProps> = ({ isOpen, handleClose, children }) => {
  return (
    <MuiModal open={isOpen} onClose={handleClose}>
      <ModalContainer>{children}</ModalContainer>
    </MuiModal>
  );
};

export default Modal;
