import { FC, useCallback, useMemo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { useCells } from 'common/hooks/useCells';
import { useResults } from 'queries/useResults';
import {
  InfoPanel,
  WinnerPanel,
  PredictionPanel,
} from 'modules/Home/components';
import { ICell } from 'modules/Home/models/cell';
import { FResultsData } from 'modules/Home/models/results';
import { HomeContainerProps } from 'modules/Home/HomeContainer.types';

const HomeContainer: FC<HomeContainerProps> = () => {
  const { cells, setCells } = useCells();

  const { data: resultsData, isLoading: isFetchingResults } = useResults();

  const gameResults = useMemo(() => {
    return FResultsData(resultsData);
  }, [resultsData]);

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

  return (
    <Grid container spacing={1} alignItems="center">
      <InfoPanel gameResults={gameResults} />

      <WinnerPanel progress={progress} results={highlightedResults} />

      <PredictionPanel
        cells={cells}
        onSelect={onSelectNumber}
        onSubmit={onSubmit}
      />
    </Grid>
  );
};

export default HomeContainer;
