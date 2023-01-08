import { FC } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  // eslint-disable-next-line import/named
  SelectChangeEvent,
} from '@mui/material';
import { useNetworkConfiguration } from 'common/contexts/NetworkConfigurationProvider';
import { NETWORK } from 'types/enum';

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setNetworkConfiguration(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="network-select-label">Network</InputLabel>
        <Select
          label="Network"
          labelId="network-select-label"
          id="network-select"
          value={networkConfiguration}
          onChange={handleChange}
        >
          <MenuItem value={NETWORK.main}>main</MenuItem>
          <MenuItem value={NETWORK.devnet}>devnet</MenuItem>
          <MenuItem value={NETWORK.testnet}>test</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NetworkSwitcher;
