import { FC, ChangeEvent } from 'react';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';
import { useAutoConnect } from 'common/contexts/AutoConnectProvider';

const AutoConnect: FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAutoConnect(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={autoConnect} onChange={handleChange} />}
        label="Autoconnect"
        labelPlacement="bottom"
      />
    </FormGroup>
  );
};

export default AutoConnect;
