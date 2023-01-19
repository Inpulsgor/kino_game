import { FC } from 'react';
import {
  Unstable_Grid2 as Grid,
  Typography,
  Divider,
  Skeleton,
  Stack,
} from '@mui/material';
import { InfoPanelProps } from './InfoPanel.types';
import { PaperBox } from './InfoPanel.styles';

const InfoPanel: FC<InfoPanelProps> = ({ gameResults }) => {
  const {
    current_winner_slot: winner_slot,
    next_winner_slot,
    slot_now,
    snooze,
  } = gameResults;

  return (
    <Grid xs={12} sx={{ maxHeight: '120px', height: '100%' }} marginTop="auto">
      <PaperBox>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Grid xs>
            <Typography>Current draw:</Typography>
            <Typography variant="h2" component="span">
              {winner_slot ? winner_slot : <Skeleton height="40px" />}
            </Typography>
          </Grid>

          <Grid xs>
            <Typography>Current slot:</Typography>
            <Typography variant="h2" component="span">
              {slot_now ? slot_now : <Skeleton height="40px" />}
            </Typography>
          </Grid>

          <Grid xs>
            <Typography>Next draw:</Typography>
            <Typography variant="h2" component="span">
              {next_winner_slot ? next_winner_slot : <Skeleton height="40px" />}
            </Typography>
          </Grid>

          <Grid xs>
            <Typography>Update in:</Typography>
            <Typography variant="h2" component="span">
              {snooze ? snooze : <Skeleton height="40px" />}
            </Typography>{' '}
            {snooze && 'seconds'}
          </Grid>
        </Stack>
      </PaperBox>
    </Grid>
  );
};

export default InfoPanel;
