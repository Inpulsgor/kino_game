import { FC } from 'react';

import { Unstable_Grid2 as Grid, Button } from '@mui/material';
import { ResultsSubmitProps } from './ResultsSubmit.types';

const ResultsSubmit: FC<ResultsSubmitProps> = ({
  onSubmit,
  isDisabled = false,
}) => {
  return (
    <Grid>
      <Button
        sx={{ minHeight: '44px' }}
        fullWidth
        variant="contained"
        onClick={onSubmit}
        color="success"
        disabled={isDisabled}
      >
        Bet 1MM BONK
      </Button>
    </Grid>
  );
};

export default ResultsSubmit;
