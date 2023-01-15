import { FC } from 'react';
import { Unstable_Grid2 as Grid, Button } from '@mui/material';
import { CellProps } from './Cell.types';
import { CellButton } from './Cell.styles';

const Cell: FC<CellProps> = ({
  id,
  number,
  winner,
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
        sx={{
          width: '100%',
          '&.Mui-disabled': {
            color: winner ? '#fff' : '#1f1f1f',
            backgroundColor: winner ? 'orange' : '#fff',
          },
        }}
      >
        {number}
      </CellButton>
    </Grid>
  );
};

export default Cell;
