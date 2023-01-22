import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, LinearProgress } from '@mui/material';
import { ProgressBarProps } from './ProgressBar.types';
import { Percentage } from './ProgressBar.styles';

const ProgressBar: FC<ProgressBarProps> = ({ progress = 0 }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      xs={12}
      // spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item xs={10}>
        <LinearProgress color="info" value={progress} variant="determinate" />
      </Grid>

      <Grid item xs={2}>
        <Percentage>{progress} %</Percentage>
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
