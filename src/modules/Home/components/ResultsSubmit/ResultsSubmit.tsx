import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Unstable_Grid2 as Grid, Button, Tooltip } from '@mui/material';
import { ResultsSubmitProps } from './ResultsSubmit.types';

const ResultsSubmit: FC<ResultsSubmitProps> = ({ onSubmit }) => {
  const { connected } = useWallet();

  return (
    <Grid>
      <Tooltip
        title={!connected ? 'Please connect your wallet first' : ''}
        placement="top"
        arrow
      >
        <Button
          sx={{ minHeight: '44px' }}
          fullWidth
          variant="contained"
          onClick={onSubmit}
          color="success"
        >
          Submit Results
        </Button>
      </Tooltip>
    </Grid>
  );
};

export default ResultsSubmit;
