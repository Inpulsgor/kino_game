import { FC, memo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { Cell } from 'modules/Kino/components';
import { CellGridProps } from './CellGrid.types';

const CellGridBase: FC<CellGridProps> = ({ cells = [], onSelectNumber }) => {
  return (
    <Grid container spacing={0.5} justifyContent="center">
      {cells.map(cell => (
        <Cell
          key={cell.id}
          {...cell}
          onSelectNumber={onSelectNumber}
          gridSize={2}
          tooltipTitle={`Select number ${cell.number}`}
        />
      ))}
    </Grid>
  );
};

const CellGrid = memo(CellGridBase);

export default CellGrid;
