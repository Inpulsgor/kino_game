import { ChangeEvent } from 'react';

export interface ResultsSubmitProps {
  isDisabled?: boolean;
  isSubmitting?: boolean;
  selectedBetAmount: number;
  selectedCurrency: string;
  onSubmit: () => void;
  onAmountChange: (event: any) => void;
  onCurrencyChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
