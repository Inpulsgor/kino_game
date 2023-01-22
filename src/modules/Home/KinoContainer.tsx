import { FC, useMemo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { useCells } from 'common/hooks/useCells';
import { useResults } from 'queries/useResults';
import {
  InfoPanel,
  WinnerPanel,
  PredictionPanel,
} from 'modules/Home/components';
import { FResultsData } from 'modules/Home/models/results';
import { HomeContainerProps } from 'modules/Home/KinoContainer.types';

const HomeContainer: FC<HomeContainerProps> = () => {
  const { cells, setCells } = useCells();

  const { data: resultsData, refetch, isLoading } = useResults();

  const gameResults = useMemo(() => {
    return FResultsData(resultsData);
  }, [resultsData]);

  const progress = useMemo(() => {
    if (gameResults?.slot_now && gameResults?.current_winner_slot) {
      return (gameResults?.slot_now - gameResults?.current_winner_slot) / 6;
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

  return (
    <Grid container spacing={1} alignItems="center">
      <InfoPanel
        isLoading={isLoading}
        refetch={refetch}
        gameResults={gameResults}
      />

      <WinnerPanel
        isLoading={isLoading}
        progress={progress}
        results={highlightedResults}
      />

      <PredictionPanel
        isLoading={isLoading}
        cells={cells}
        setCells={setCells}
      />
    </Grid>
  );
};

export default HomeContainer;
