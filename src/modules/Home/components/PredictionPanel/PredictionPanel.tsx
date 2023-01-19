import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Unstable_Grid2 as Grid,
  Typography,
  Divider,
  Stack,
} from '@mui/material';
import { ResultsSubmit, PickGrid } from 'modules/Home/components';
import { PredictionPanelProps } from './PredictionPanel.types';
import { PaperBox } from './PredictionPanel.styles';

const PredictionPanel: FC<PredictionPanelProps> = ({
  cells,
  onSelect,
  onSubmit,
}) => {
  const { connected } = useWallet();

  return (
    <Grid xs={4}>
      <PaperBox sx={{ maxHeight: 'fit-content' }}>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          <Grid>
            <Typography color="#fff">Selected numbers:</Typography>
          </Grid>

          <Grid>
            <PickGrid cells={cells} handleSelectNumber={onSelect} />
          </Grid>

          <ResultsSubmit onSubmit={onSubmit} disabled={!connected} />
        </Stack>
      </PaperBox>
    </Grid>
  );
};

export default PredictionPanel;
