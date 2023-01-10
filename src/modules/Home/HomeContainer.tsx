import { FC, useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { ResultsSubmit, ResultsGrid, PickGrid } from 'modules/Home/components';
import { useCells } from 'common/hooks/useCells';
import { ICell } from './models/cell';
import { HomeContainerProps } from 'modules/Home/HomeContainer.types';
import { Container, PaperBox } from 'modules/Home/HomeContainer.styled';

const HomeContainer: FC<HomeContainerProps> = () => {
  const { connected } = useWallet();
  const { cells, selectedNCells, setCells } = useCells();

  const handleSelectNumber = useCallback(
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

  const handleSubmitResults = useCallback(() => {
    console.log(
      'cells',
      cells.filter(cell => cell.selected),
    );
  }, [cells]);

  console.log('selectedNCells', selectedNCells);

  return (
    <Container>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Grid xs={8}>
          <ResultsGrid cells={cells} />
        </Grid>

        <Grid xs={4}>
          <PaperBox>
            <Grid container flexDirection="column">
              <Grid>
                <Typography color="#1f1f1f">Selected numbers:</Typography>
              </Grid>

              <PickGrid cells={cells} handleSelectNumber={handleSelectNumber} />
              <ResultsSubmit
                onSubmit={handleSubmitResults}
                disabled={!connected}
              />
            </Grid>
          </PaperBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
