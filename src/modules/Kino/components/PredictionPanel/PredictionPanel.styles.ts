import { styled } from '@mui/system';
import { Box, Paper } from '@mui/material';

export const PaperBox = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(2),
  height: '100%',
  width: '100%',
  maxHeight: 'fit-content',
}));
