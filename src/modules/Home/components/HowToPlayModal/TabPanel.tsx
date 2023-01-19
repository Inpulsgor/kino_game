import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface TabPanelProps {
  selectedIdx: number;
  tabIdx: number;
  description: string;
}

const TabPanel: FC<TabPanelProps> = ({ selectedIdx, tabIdx, description }) => {
  return (
    <Box
      role="tabpanel"
      hidden={selectedIdx !== tabIdx}
      id={`simple-tabpanel-${tabIdx}`}
      aria-labelledby={`simple-tab-${tabIdx}`}
    >
      {selectedIdx === tabIdx && (
        <Box sx={{ p: 3 }}>
          <Typography>{description}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;
