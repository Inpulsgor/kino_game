import { styled } from '@mui/system';
import { Box, Paper } from '@mui/material';

export const Container = styled(Box)({
  height: '100%',
  width: '100%',
});

export const NumbersContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fafafa',
  padding: theme.spacing(2),
  width: '100%',
}));
