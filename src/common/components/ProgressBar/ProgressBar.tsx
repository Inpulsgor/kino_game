import { FC } from 'react';
import { Unstable_Grid2 as Grid, LinearProgress } from '@mui/material';
import { Preloader } from 'common/components';
import { ProgressBarProps } from './ProgressBar.types';
import { Percentage } from './ProgressBar.styles';

const ProgressBar: FC<ProgressBarProps> = ({ progress = 0, isLoading }) => {
  return (
    <Grid
      container
      xs={12}
      spacing={1}
      alignItems="center"
      justifyContent="space-between"
      sx={{ minHeight: 122 }}
    >
      <Grid xs={10}>
        <LinearProgress
          color="success"
          value={progress}
          variant="determinate"
        />
      </Grid>

      <Grid
        xs={2}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {isLoading ? (
          <Preloader isLoading={isLoading} />
        ) : (
          <Percentage>{progress?.toFixed(0)} %</Percentage>
        )}
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
