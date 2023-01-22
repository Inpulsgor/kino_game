import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const CellButton = styled(Button)(({ theme }) => ({
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',

  '&.Mui-disabled': {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    color: '#000',
  },
}));
