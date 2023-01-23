import { FC } from 'react';
import {
  Unstable_Grid2 as Grid,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { ResultsSubmitProps } from './ResultsSubmit.types';

const ResultsSubmit: FC<ResultsSubmitProps> = ({
  onSubmit,
  selectedCurrency,
  selectedBetAmount,
  onCurrencyChange,
  onAmountChange,
  isDisabled = false,
}) => {
  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <FormControl fullWidth>
            <InputLabel id="amount-select-label">Amount</InputLabel>
            <Select
              label="Amount"
              labelId="amount-select-label"
              id="amount-select"
              value={selectedBetAmount}
              onChange={onAmountChange}
            >
              <MenuItem value={100_000}>100_000</MenuItem>
              <MenuItem value={1_000_000}>1_000_000</MenuItem>
              <MenuItem value={10_000_000}>10_000_000</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={6}>
          <FormControl>
            <RadioGroup
              row
              name="currencies"
              value={selectedCurrency}
              onChange={onCurrencyChange}
            >
              <FormControlLabel
                value="BONK"
                control={
                  <Radio
                    sx={{
                      color: '#EAB809',
                      '&.Mui-checked': {
                        color: '#EAB809',
                      },
                    }}
                  />
                }
                label="BONK"
              />
              <FormControlLabel
                value="SOL"
                disabled
                control={
                  <Radio
                    sx={{
                      color: '#EAB809',
                      '&.Mui-checked': {
                        color: '#EAB809',
                      },
                    }}
                  />
                }
                label="SOL"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid xs={6}>
          <Button
            sx={{ minHeight: '44px' }}
            fullWidth
            variant="contained"
            onClick={onSubmit}
            color="success"
            disabled={isDisabled}
          >
            Bet 1MM {selectedCurrency}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResultsSubmit;
