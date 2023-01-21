import { FC } from 'react';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { NumberInput } from 'common/components';
import { generateMatchFields } from 'modules/Home/helpers/functions';

const MatchNumbers: FC = () => {
  const matchFields = generateMatchFields();

  return (
    <Grid>
      <Grid container>
        <Typography color="#fff">Selected numbers:</Typography>

        {/* {matchFields.length > 0 && matchFields.map(field => <NumberInput />)} */}
      </Grid>
    </Grid>
  );
};

export default MatchNumbers;
