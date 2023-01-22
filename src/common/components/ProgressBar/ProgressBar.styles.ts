import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const Percentage = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '36px',
  minWidth: '150px',
  color: theme.palette.success.main,
  letterSpacing: '4px',
  userSelect: 'none',

  '&:hover': {
    transition: 'all linear 0.2s',
    color: '#FFF',
    WebkitTextStroke: '1px #FFF',
  },
}));
