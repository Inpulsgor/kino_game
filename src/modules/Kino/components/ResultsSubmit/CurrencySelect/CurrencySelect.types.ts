import { ChangeEvent } from 'react';

export interface CurrencySelectProps {
  selectedCurrency: string;
  onCurrencyChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
