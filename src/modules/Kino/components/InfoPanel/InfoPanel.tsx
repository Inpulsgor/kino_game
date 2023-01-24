import { FC, memo, useMemo } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import {
  Unstable_Grid2 as Grid,
  Typography,
  Divider,
  Stack,
} from '@mui/material';
import { Preloader } from 'common/components';
import { InfoPanelProps, Renderer } from './InfoPanel.types';
import { PaperBox } from './InfoPanel.styles';

const InfoPanelBase: FC<InfoPanelProps> = ({ gameResults, refetch }) => {
  const {
    current_winner_slot: winner_slot,
    next_winner_slot,
    slot_now,
    snooze,
  } = gameResults;

  const endCountdown = useMemo(
    () => Date.now() + (snooze ? snooze * 1000 : 0),
    [snooze],
  );

  const renderer = ({ hours, minutes, seconds }: Renderer) => (
    <Typography variant="h2" component="span">
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </Typography>
  );

  return (
    <Grid
      xs={12}
      sx={{
        maxHeight: '130px',
        height: '100%',
      }}
      marginTop="auto"
    >
      <PaperBox>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Grid xs>
            <Typography>Current draw:</Typography>
            <Typography variant="h2" component="span">
              {winner_slot ? winner_slot : <Preloader isLoading />}
            </Typography>
          </Grid>

          <Grid xs>
            <Typography>Current slot:</Typography>
            <Typography variant="h2" component="span">
              {slot_now ? slot_now : <Preloader isLoading />}
            </Typography>
          </Grid>

          <Grid xs>
            <Typography>Next draw:</Typography>
            <Typography variant="h2" component="span">
              {next_winner_slot ? next_winner_slot : <Preloader isLoading />}
            </Typography>
          </Grid>

          <Grid xs>
            <Typography>Update in:</Typography>
            <Typography variant="h2" component="span">
              {snooze ? (
                <Countdown
                  intervalDelay={1}
                  precision={3}
                  date={endCountdown}
                  renderer={renderer}
                  key={snooze}
                  onComplete={() => refetch()}
                />
              ) : (
                <Preloader isLoading />
              )}
            </Typography>
          </Grid>
        </Stack>
      </PaperBox>
    </Grid>
  );
};

const InfoPanel = memo(InfoPanelBase);

export default InfoPanel;
