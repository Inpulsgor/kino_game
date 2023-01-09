import { FC } from 'react';
import { Unstable_Grid2 as Grid, Button } from '@mui/material';
import { PaperBox } from './ResultsSubmit.styles';

const ResultsSubmit: FC = () => {
  return (
    <Grid>
      <PaperBox>
        <Button fullWidth variant="contained">
          Submit Results
        </Button>
      </PaperBox>
    </Grid>
  );
};

export default ResultsSubmit;
