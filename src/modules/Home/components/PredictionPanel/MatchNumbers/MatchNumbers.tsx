import { FC } from 'react';
import { Unstable_Grid2 as Grid, Typography, Box } from '@mui/material';
import { generateMatchFields } from 'modules/Home/helpers/functions';

const MatchNumbers: FC = () => {
  const matchFields = generateMatchFields();

  return (
    <Grid>
      <Grid container>
        <Typography color="#fff">Selected numbers:</Typography>

        <Grid container xs={12} spacing={1}>
          {matchFields.map((field, index) => (
            <Grid key={field.id} xs={2}>
              <Box sx={{ border: '1px solid #fff' }}>{index}</Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MatchNumbers;
