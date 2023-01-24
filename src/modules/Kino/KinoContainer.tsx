import { FC, useMemo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { useCells } from 'common/hooks/useCells';
import { useResults } from 'queries/useResults';
import {
  InfoPanel,
  WinnerPanel,
  PredictionPanel,
} from 'modules/Kino/components';
import { FResultsData } from 'modules/Kino/models/results';
import { KinoContainerProps } from 'modules/Kino/KinoContainer.types';

const KinoContainer: FC<KinoContainerProps> = () => {
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

export default KinoContainer;
