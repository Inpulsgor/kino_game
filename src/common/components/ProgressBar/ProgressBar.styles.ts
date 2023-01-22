import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const Percentage = styled(Typography)(() => ({
  textAlign: 'center',
  fontSize: '32px',
  minWidth: '150px',
  WebkitTextStroke: '0.5px #FFF',
  color: 'transparent',
  letterSpacing: '4px',
  userSelect: 'none',

  '&:hover': {
    transition: 'all linear 0.2s',
    color: '#FFF',
    WebkitTextStroke: '1px #FFF',
  },
}));
