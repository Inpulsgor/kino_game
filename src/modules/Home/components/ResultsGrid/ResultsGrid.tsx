import { FC, memo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { Cell } from 'modules/Home/components';
import { ResultsGridProps } from './ResultsGrid.types';
import { PaperBox } from './ResultsGrid.styles';

const ResultsGridBase: FC<ResultsGridProps> = ({ cells = [] }) => {
  return (
    <PaperBox>
      <Grid container spacing={1}>
        {cells.map(cell => (
          <Cell key={cell.id} {...cell} disabled />
        ))}
      </Grid>
    </PaperBox>
  );
};

const ResultsGrid = memo(ResultsGridBase);

export default ResultsGrid;
