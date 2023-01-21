import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

interface NumberInputProps {
  control: Control;
  index: number;
  variant: 'outlined' | 'filled' | 'standard';
}

const NumberInput: FC<NumberInputProps> = ({ control, index }) => {
  return (
    <Controller
      name={`test.${index}.lastName`}
      control={control}
      render={({ field }) => (
        <TextField {...field} type="number" variant="standard" />
      )}
    />
  );
};

export default NumberInput;
