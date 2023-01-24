import { FC, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Modal } from 'common/components';
import { TabPanel } from 'modules/Kino/components';
import { howToTabs } from 'modules/Kino/static/rules';
import { a11yProps } from 'modules/Kino/helpers/functions';
import { HowToPlayModalProps } from './HowToPlayModal.types';

const HowToPlayModal: FC<HowToPlayModalProps> = ({ isOpen, handleClose }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleChange = (_: unknown, newValue: number) => {
    setSelectedTabIndex(newValue);
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs
          value={selectedTabIndex}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
        >
          {howToTabs.map(({ label }, tabIndex) => (
            <Tab
              key={tabIndex}
              label={label}
              color="primary"
              {...a11yProps(tabIndex)}
            />
          ))}
        </Tabs>
      </Box>

      {howToTabs.map(({ description, payouts }, tabIndex) => (
        <TabPanel
          key={tabIndex}
          tabIdx={tabIndex}
          payouts={payouts}
          description={description}
          selectedIdx={selectedTabIndex}
        />
      ))}
    </Modal>
  );
};

export default HowToPlayModal;
