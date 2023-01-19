import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const Wrappper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '100vh',
});

export const Title = styled(Typography)({
  marginBottom: '10px',
});
