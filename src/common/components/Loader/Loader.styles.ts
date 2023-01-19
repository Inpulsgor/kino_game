import { Backdrop } from '@mui/material';
import { styled } from '@mui/system';

import theme from 'styles/theme';

export const LoaderBackdrop = styled(Backdrop)(() => ({
  color: 'custom.white',
  zIndex: theme?.zIndex?.drawer + 1,
}));
