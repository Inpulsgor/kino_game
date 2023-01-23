import { FC } from 'react';
import { Unstable_Grid2 as Grid, Tooltip, Zoom } from '@mui/material';
import { CellProps } from './Cell.types';
import { CellButton } from './Cell.styles';

const Cell: FC<CellProps> = ({
  id,
  number,
  winner,
  size = 'medium',
  color = 'info',
  selected = false,
  disabled = false,
  variant = 'contained',
  gridSize = 1,
  onSelectNumber,
  tooltipTitle = '',
}) => {
  const handleSelect = () => {
    if (!id && !onSelectNumber) return;

    onSelectNumber?.(id);
  };

  return (
    <Grid xs={4} sm={2} lg={gridSize}>
      <Tooltip placement="top" title={tooltipTitle} TransitionComponent={Zoom}>
        <CellButton
          color={color}
          size={size}
          variant={variant}
          onClick={handleSelect}
          disabled={selected || disabled}
          sx={{
            width: '100%',
            minHeight: '30px',

            '&.Mui-disabled': {
              color: winner ? '#fff' : '#1f1f1f',
              backgroundColor: winner ? '#EAB809' : '#fff',
            },
          }}
        >
          {number ? number : ''}
        </CellButton>
      </Tooltip>
    </Grid>
  );
};

export default Cell;
