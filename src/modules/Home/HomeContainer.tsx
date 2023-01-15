import { FC, useCallback, useMemo } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Unstable_Grid2 as Grid,
  Typography,
  Divider,
  Chip,
} from '@mui/material';
import { ProgressBar } from 'common/components';
import { ResultsSubmit, ResultsGrid, PickGrid } from 'modules/Home/components';
import { useCells } from 'common/hooks/useCells';
import { ICell } from './models/cell';
import { HomeContainerProps } from 'modules/Home/HomeContainer.types';
import { Container, PaperBox } from 'modules/Home/HomeContainer.styled';
import { useResults } from 'common/queries/useResults';

const HomeContainer: FC<HomeContainerProps> = () => {
  const { connected } = useWallet();
  const { cells, selectedNCells, setCells } = useCells();

  const { data: gameResults } = useResults();

  const onSelectNumber = useCallback(
    (cellID: string | null) => {
      const updatedCells: ICell[] = cells.map(cell => {
        if (cell.id === cellID) {
          return {
            ...cell,
            selected: true,
          };
        }

        return cell;
      });

      setCells(updatedCells);
    },
    [cells, setCells],
  );

  const onSubmit = useCallback(() => {
    console.log(
      'cells',
      cells.filter(cell => cell.selected),
    );
  }, [cells]);

  console.log('selectedNCells', selectedNCells);

  const progress = useMemo(() => {
    if (gameResults?.slot_now && gameResults?.current_winner_slot) {
      return (gameResults?.slot_now - gameResults?.current_winner_slot) / 600;
    }

    return 0;
  }, [gameResults]);

  const highlightedResults = useMemo(() => {
    if (gameResults?.current_winner_numbers) {
      return cells.map(cell => {
        if (gameResults.current_winner_numbers.includes(cell.number)) {
          return {
            ...cell,
            winner: true,
          };
        }

        return cell;
      });
    }

    return cells;
  }, [gameResults, cells]);

  console.log('highlightedResults :>> ', highlightedResults);

  return (
    <Container>
      <Grid container spacing={1} height="100%">
        <Grid xs={12}>
          <PaperBox>
            <Grid container spacing={2} sx={{ height: '100%' }}>
              <Grid xs>
                <Typography>Current draw:</Typography>
                <Typography variant="h2" component="span">
                  {gameResults?.current_winner_slot}
                </Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid xs>
                <Typography>Current slot:</Typography>
                <Typography variant="h2" component="span">
                  {gameResults?.slot_now}
                </Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid xs>
                <Typography>Next draw:</Typography>
                <Typography variant="h2" component="span">
                  {gameResults?.next_winner_slot}
                </Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid xs>
                <Typography>Update in:</Typography>
                <Typography variant="h2" component="span">
                  {gameResults?.snooze}
                </Typography>{' '}
                seconds
              </Grid>
            </Grid>
          </PaperBox>
        </Grid>

        <Grid xs={8}>
          <PaperBox>
            <ProgressBar progress={Number(progress.toFixed(2))} />
            <Divider textAlign="left" sx={{ marginBottom: 3 }}>
              <Chip label="Winning numbers" />
            </Divider>
            <ResultsGrid cells={highlightedResults} />
          </PaperBox>
        </Grid>

        <Grid xs={4}>
          <PaperBox>
            <Grid
              container
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Grid>
                <Typography color="#fff">Selected numbers:</Typography>
              </Grid>

              <Divider variant="middle" />

              <Grid>
                <PickGrid cells={cells} handleSelectNumber={onSelectNumber} />
              </Grid>

              <Divider variant="middle" />

              <ResultsSubmit onSubmit={onSubmit} disabled={!connected} />
            </Grid>
          </PaperBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
