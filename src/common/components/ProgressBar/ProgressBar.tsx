import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, LinearProgress } from '@mui/material';
import { ProgressBarProps } from './ProgressBar.types';
import { WrapperBox, Percentage } from './ProgressBar.styles';

const ProgressBar: FC<ProgressBarProps> = ({ progress = 0 }) => {
  const theme = useTheme();

  return (
    <WrapperBox>
      <Box sx={{ width: '100%', mr: 2 }}>
        <LinearProgress color="info" value={progress} variant="determinate" />
      </Box>

      <Percentage>{progress} %</Percentage>
    </WrapperBox>
  );
};

export default ProgressBar;
