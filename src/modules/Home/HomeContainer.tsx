import { FC, useCallback } from 'react';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { CellGrid } from 'modules/Home/components';
import { HomeContainerProps } from 'modules/Home/HomeContainer.types';
import { Container, NumbersContainer } from 'modules/Home/HomeContainer.styled';
import { useCells } from 'common/hooks/useCells';
import { ICell } from './models/cell';

const HomeContainer: FC<HomeContainerProps> = () => {
  const { cells, setCells } = useCells();

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
          <NumbersContainer>
            <CellGrid cells={cells} onSelectNumber={handleSelectNumber} />
          </NumbersContainer>
        </Grid>
        <Grid xs={4}>
          <NumbersContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
