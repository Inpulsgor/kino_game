import { FC } from 'react';
import { TextField } from '@mui/material';

interface NumberInputProps {
  label: string;
}

const NumberInput: FC<NumberInputProps> = ({ label }) => {
  return (
    <TextField
      id="standard-number"
      label={label}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="standard"
    />
  );
};

export default NumberInput;
