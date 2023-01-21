import { FC, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Unstable_Grid2 as Grid,
  Typography,
  Divider,
  Skeleton,
  Stack,
} from '@mui/material';
import { InfoPanelProps, Renderer } from './InfoPanel.types';
import { PaperBox } from './InfoPanel.styles';
import Countdown, { zeroPad } from 'react-countdown';

const InfoPanel: FC<InfoPanelProps> = ({ gameResults }) => {
  const theme = useTheme();

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

  const renderer = ({ hours, minutes, seconds, completed }: Renderer) => {
    if (completed) {
      return (
        <Typography
          color={theme.palette.success.main}
          variant="h2"
          component="span"
        >
          Woohoo
        </Typography>
      );
    }

    return (
      <Typography variant="h2" component="span">
        {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </Typography>
    );
  };

  return (
    <Grid xs={12} sx={{ maxHeight: '130px', height: '100%' }} marginTop="auto">
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
              {snooze ? (
                <Countdown
                  intervalDelay={1}
                  precision={3}
                  date={endCountdown}
                  renderer={renderer}
                />
              ) : (
                <Skeleton height="40px" />
              )}
            </Typography>
          </Grid>
        </Stack>
      </PaperBox>
    </Grid>
  );
};

export default InfoPanel;
