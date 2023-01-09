import { FC } from 'react';
import { Unstable_Grid2 as Grid, Button } from '@mui/material';
import { CellProps } from './Cell.types';
import { CellButton } from './Cell.styles';

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
      <CellButton
        color="secondary"
        disabled={selected}
        size="medium"
        variant="contained"
        onClick={handleSelect}
      >
        {number}
      </CellButton>
    </Grid>
  );
};

export default Cell;
