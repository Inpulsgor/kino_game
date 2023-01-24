import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import PayoutTable from './PayoutTable';

export interface Payout {
  game: number;
  counter: number;
  multi: number;
}

interface TabPanelProps {
  selectedIdx: number;
  tabIdx: number;
  description: string;
  payouts: Payout[] | null;
}

const TabPanel: FC<TabPanelProps> = ({
  selectedIdx,
  tabIdx,
  description,
  payouts,
}) => {
  return (
    <Box
      role="tabpanel"
      hidden={selectedIdx !== tabIdx}
      id={`simple-tabpanel-${tabIdx}`}
      aria-labelledby={`simple-tab-${tabIdx}`}
      sx={{ minHeight: '336px' }}
    >
      {selectedIdx === tabIdx && (
        <Box sx={{ p: 3 }}>
          {payouts ? (
            <PayoutTable payouts={payouts} />
          ) : (
            <Typography>{description}</Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;
