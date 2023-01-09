import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const CellButton = styled(Button)(({ theme }) => ({
  '&.Mui-disabled': {
    backgroundColor: 'orange',
    color: '#000',
  },
}));
