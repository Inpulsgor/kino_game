import { styled } from '@mui/system';
import { Typography, Paper } from '@mui/material';

export const PaperBox = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fafafa',
  padding: theme.spacing(2),
  width: '100%',
}));
