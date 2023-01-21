import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const WrapperBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 8,
  padding: '12px 0',
}));

export const Percentage = styled(Typography)(() => ({
  fontSize: '32px',
  minWidth: '130px',
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
