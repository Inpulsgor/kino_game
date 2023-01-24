import { FC, memo } from 'react';
import {
  Unstable_Grid2 as Grid,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Tooltip,
  Zoom,
} from '@mui/material';
import { CurrencySelectProps } from './CurrencySelect.types';
import { RadioButton } from './CurrencySelect.styles';

const CurrencySelectBase: FC<CurrencySelectProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  return (
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
            control={<RadioButton />}
            label="BONK"
          />

          <Tooltip
            arrow
            placement="top"
            title="SOL option will be available soon"
            TransitionComponent={Zoom}
          >
            <FormControlLabel
              value="SOL"
              disabled
              control={<RadioButton />}
              label="SOL"
            />
          </Tooltip>
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

const CurrencySelect = memo(CurrencySelectBase);

export default CurrencySelect;
