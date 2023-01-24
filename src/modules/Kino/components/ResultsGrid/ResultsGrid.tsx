import { FC, memo } from 'react';
import { Unstable_Grid2 as Grid, Skeleton } from '@mui/material';
import { Cell } from 'modules/Kino/components';
import { ResultsGridProps } from './ResultsGrid.types';

const ResultsGridBase: FC<ResultsGridProps> = ({ cells = [] }) => {
  return (
    <Grid container spacing={1} sx={{ mb: 4 }}>
      {cells.length > 0 ? (
        cells.map(cell => <Cell key={cell.id} {...cell} disabled />)
      ) : (
        <Skeleton width="100%" height="200px" />
      )}
    </Grid>
  );
};

const ResultsGrid = memo(ResultsGridBase);

export default ResultsGrid;
