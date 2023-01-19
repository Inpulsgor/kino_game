import { FC } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { CellGrid } from 'modules/Home/components';
import { PickGridProps } from './PickGrid.types';

const PickGrid: FC<PickGridProps> = ({ cells = [], handleSelectNumber }) => (
  <Grid>
    <CellGrid cells={cells} onSelectNumber={handleSelectNumber} />
  </Grid>
);

export default PickGrid;
