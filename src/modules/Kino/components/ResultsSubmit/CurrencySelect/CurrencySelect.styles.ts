import { styled } from '@mui/system';
import { Radio } from '@mui/material';

export const RadioButton = styled(Radio)(({ theme }) => ({
  color: theme.palette.success.main,

  '&.Mui-checked': {
    color: theme.palette.success.main,
  },
}));
