import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const ModalContainer = styled(Paper)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fff',
  minWidth: 700,
  minHeight: 300,
  color: '#1f1f1f',
  padding: 24,

  '&:focus': {
    outline: 'none',
  },
}));
