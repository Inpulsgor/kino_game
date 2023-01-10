import { FC, memo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { Cell } from 'modules/Home/components';
import { ResultsGridProps } from './ResultsGrid.types';

const ResultsGridBase: FC<ResultsGridProps> = ({ cells = [] }) => {
  return (
    <Grid container spacing={1}>
      {cells.map(cell => (
        <Cell key={cell.id} {...cell} disabled />
      ))}
    </Grid>
  );
};

const ResultsGrid = memo(ResultsGridBase);

export default ResultsGrid;
