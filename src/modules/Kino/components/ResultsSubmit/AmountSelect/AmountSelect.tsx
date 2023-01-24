import { FC, memo } from 'react';
import {
  Unstable_Grid2 as Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { PAYMENT_AMOUNT } from 'modules/Kino/static/payment';
import { AmountSelectProps } from './AmountSelect.types';

const AmountSelectBase: FC<AmountSelectProps> = ({
  selectedBetAmount,
  onAmountChange,
}) => {
  return (
    <Grid xs={6}>
      <FormControl fullWidth>
        <InputLabel id="amount-select-label">Amount</InputLabel>
        <Select
          label="Amount"
          labelId="amount-select-label"
          id="amount-select"
          value={selectedBetAmount}
          onChange={onAmountChange}
        >
          {PAYMENT_AMOUNT.map(({ label, value }) => (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

const AmountSelect = memo(AmountSelectBase);

export default AmountSelect;
