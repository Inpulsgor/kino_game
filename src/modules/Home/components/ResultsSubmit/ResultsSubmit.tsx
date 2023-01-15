import { FC } from 'react';
import { Unstable_Grid2 as Grid, Button, Tooltip } from '@mui/material';
// import { PaperBox } from './ResultsSubmit.styles';
import { ResultsSubmitProps } from './ResultsSubmit.types';

const ResultsSubmit: FC<ResultsSubmitProps> = ({ onSubmit, disabled }) => {
  return (
    <Grid>
      <Tooltip
        title={disabled ? 'Please connect your wallet first' : ''}
        placement="top"
        arrow
      >
        <Button
          fullWidth
          variant="contained"
          onClick={onSubmit}
          // disabled={disabled}
        >
          Submit Results
        </Button>
      </Tooltip>
    </Grid>
  );
};

export default ResultsSubmit;
