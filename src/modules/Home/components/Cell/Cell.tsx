import { FC } from 'react';
import { Unstable_Grid2 as Grid, Button } from '@mui/material';
import { CellProps } from './Cell.types';

const Cell: FC<CellProps> = ({
  id,
  number,
  selected = false,
  onSelectNumber,
}) => {
  const handleSelect = () => {
    if (!id && !onSelectNumber) return;

    onSelectNumber(id);
  };

  return (
    <Grid>
      <Button
        color="secondary"
        disabled={selected}
        size="medium"
        variant="outlined"
        onClick={handleSelect}
      >
        {number}
      </Button>
    </Grid>
  );
};

export default Cell;
