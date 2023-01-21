import { FC } from 'react';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { CellGrid } from 'modules/Home/components';
import { PickGridProps } from './PickGrid.types';

const PickGrid: FC<PickGridProps> = ({ cells = [], handleSelectNumber }) => (
  <Grid>
    <Typography color="#fff">Selected numbers:</Typography>
    <CellGrid cells={cells} onSelectNumber={handleSelectNumber} />
  </Grid>
);

export default PickGrid;
