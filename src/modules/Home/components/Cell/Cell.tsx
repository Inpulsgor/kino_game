import { FC } from 'react';
import { Unstable_Grid2 as Grid, Button } from '@mui/material';
import { CellProps } from './Cell.types';
import { CellButton } from './Cell.styles';

const Cell: FC<CellProps> = ({
  id,
  number,
  size = 'medium',
  color = 'secondary',
  selected = false,
  disabled = false,
  variant = 'contained',
  onSelectNumber,
}) => {
  const handleSelect = () => {
    if (!id && !onSelectNumber) return;

    onSelectNumber?.(id);
  };

  return (
    <Grid>
      <CellButton
        color={color}
        size={size}
        variant={variant}
        onClick={handleSelect}
        disabled={selected || disabled}
      >
        {number}
      </CellButton>
    </Grid>
  );
};

export default Cell;
