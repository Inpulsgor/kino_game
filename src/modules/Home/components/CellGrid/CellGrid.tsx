import { FC, memo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { Cell } from 'modules/Home/components';
import { CellGridProps } from './CellGrid.types';

const CellGridBase: FC<CellGridProps> = ({ cells = [], onSelectNumber }) => {
  return (
    <Grid container spacing={0.1}>
      {cells.map(cell => (
        <Cell key={cell.id} {...cell} onSelectNumber={onSelectNumber} />
      ))}
    </Grid>
  );
};

const CellGrid = memo(CellGridBase);

export default CellGrid;
