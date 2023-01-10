import { FC } from 'react';
import { Unstable_Grid2 as Grid, Button } from '@mui/material';
// import { PaperBox } from './ResultsSubmit.styles';
import { ResultsSubmitProps } from './ResultsSubmit.types';

const ResultsSubmit: FC<ResultsSubmitProps> = ({ onSubmit, disabled }) => {
  return (
    <Grid>
      <Button
        fullWidth
        variant="contained"
        onClick={onSubmit}
        // disabled={disabled}
      >
        Submit Results
      </Button>
    </Grid>
  );
};

export default ResultsSubmit;
