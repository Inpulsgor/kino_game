import { Container, Link, Box } from '@mui/material';
import { styled } from '@mui/system';

export const AppContainer = styled(Container)({
  minHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: '20px 0',
});

export const Copyright = styled(Box)({
  display: 'flex',
  gap: 5,
  fontFamily: 'Russo One',
});

export const DevLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  backgroundColor: '#FF0000',
  padding: '3px',
  borderRadius: '4px',
});
