import { FC, useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { ProgressBar, Modal } from 'common/components';
import { ResultsSubmit, ResultsGrid, PickGrid } from 'modules/Home/components';
import { useCells } from 'common/hooks/useCells';
import { ICell } from './models/cell';
import { HomeContainerProps } from 'modules/Home/HomeContainer.types';
import { Container, PaperBox } from 'modules/Home/HomeContainer.styled';

const HomeContainer: FC<HomeContainerProps> = () => {
  const { connected } = useWallet();
  const { cells, selectedNCells, setCells } = useCells();

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

  return (
    <Container>
      <Grid container spacing={1} height="100%">
        <Grid xs={12}>
          <PaperBox>
            <Grid container spacing={2}>
              <Grid xs={3}></Grid>
              <Grid xs={3}></Grid>
              <Grid xs={3}></Grid>
              <Grid xs={3}></Grid>
            </Grid>
          </PaperBox>
        </Grid>

        <Grid xs={8}>
          <PaperBox>
            <ProgressBar progress={0} />
            <ResultsGrid cells={cells} />
          </PaperBox>
        </Grid>

        <Grid xs={4}>
          <PaperBox>
            <Grid container flexDirection="column">
              <Grid>
                <Typography color="#fff">Selected numbers:</Typography>
              </Grid>

              <Grid>
                <PickGrid cells={cells} handleSelectNumber={onSelectNumber} />
              </Grid>

              <ResultsSubmit onSubmit={onSubmit} disabled={!connected} />
            </Grid>
          </PaperBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
