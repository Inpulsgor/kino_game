import { FC } from 'react';
import { Typography, Box, LinearProgress } from '@mui/material';
import { ProgressBarProps } from './ProgressBar.types';
import { WrapperBox } from './ProgressBar.styles';

const ProgressBar: FC<ProgressBarProps> = ({ progress = 0 }) => {
  return (
    <WrapperBox>
      <Box sx={{ width: '100%', mr: 2 }}>
        <LinearProgress value={progress} variant="determinate" />
      </Box>

      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {progress}
        </Typography>
      </Box>
    </WrapperBox>
  );
};

export default ProgressBar;
