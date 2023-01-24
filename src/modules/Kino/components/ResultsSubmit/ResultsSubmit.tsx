import { FC, memo } from 'react';
import {
  Unstable_Grid2 as Grid,
  Button,
  CircularProgress,
} from '@mui/material';
import AmountSelect from './AmountSelect/AmountSelect';
import CurrencySelect from './CurrencySelect/CurrencySelect';
import { ResultsSubmitProps } from './ResultsSubmit.types';

const ResultsSubmitBase: FC<ResultsSubmitProps> = ({
  onSubmit,
  selectedCurrency,
  selectedBetAmount,
  onCurrencyChange,
  onAmountChange,
  isDisabled = false,
  isSubmitting = false,
}) => {
  return (
    <Grid>
      <Grid container spacing={2} alignItems="center">
        <CurrencySelect
          selectedCurrency={selectedCurrency}
          onCurrencyChange={onCurrencyChange}
        />

        <AmountSelect
          selectedBetAmount={selectedBetAmount}
          onAmountChange={onAmountChange}
        />

        <Grid xs={12}>
          <Button
            fullWidth
            color="success"
            variant="contained"
            onClick={onSubmit}
            disabled={isDisabled}
            sx={{
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            Bet {selectedBetAmount} of {selectedCurrency}
            {isSubmitting && <CircularProgress size={16} />}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ResultsSubmit = memo(ResultsSubmitBase);

export default ResultsSubmit;
