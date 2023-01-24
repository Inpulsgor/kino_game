import { FC } from 'react';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { Cell } from 'modules/Kino/components';
import { MatchNumbersProps } from './MatchNumbers.types';

const MatchNumbers: FC<MatchNumbersProps> = ({
  selectedNumbers,
  onSelectNumber,
}) => {
  return (
    <Grid>
      <Grid container>
        <Typography>Selected numbers (max 7):</Typography>

        <Grid container xs={12} spacing={1} sx={{ minHeight: '90px' }}>
          {selectedNumbers.map(cell => (
            <Cell
              key={cell.id}
              {...cell}
              onSelectNumber={onSelectNumber}
              gridSize={2}
              color="success"
              tooltipTitle={`Remove number ${cell.number}`}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MatchNumbers;
