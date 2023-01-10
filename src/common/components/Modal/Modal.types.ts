import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}
