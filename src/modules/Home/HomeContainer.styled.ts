import { styled } from '@mui/system';
import { Box, Paper } from '@mui/material';

export const Container = styled(Box)({
  height: '100%',
  width: '100%',
});

export const PaperBox = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  // backgroundColor: '#fafafa',
  padding: theme.spacing(2),
  height: '100%',
  width: '100%',
}));
