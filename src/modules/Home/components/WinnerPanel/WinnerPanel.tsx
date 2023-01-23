import { FC, memo } from 'react';
import { CheckCircle } from '@mui/icons-material';
import {
  Unstable_Grid2 as Grid,
  Chip,
  Divider,
  Stack,
  Box,
  Typography,
} from '@mui/material';
import { ProgressBar } from 'common/components';
import { Cell, ResultsGrid } from 'modules/Home/components';
import { WinnerPanelProps } from './WinnerPanel.types';
import { PaperBox } from './WinnerPanel.styles';

const WinnerPanelBase: FC<WinnerPanelProps> = ({
  progress,
  results,
  isLoading,
}) => {
  return (
    <Grid xs={12} lg={8} sx={{ alignSelf: 'stretch' }}>
      <PaperBox>
        <ProgressBar
          progress={Number(progress.toFixed(2))}
          isLoading={isLoading}
        />

        <Divider textAlign="left" sx={{ marginBottom: 4 }}>
          <Chip label="Winning numbers" icon={<CheckCircle />} />
        </Divider>

        <ResultsGrid cells={results} />

        <Divider textAlign="left" sx={{ marginBottom: 4 }}>
          <Chip label="Legend" icon={<CheckCircle />} />
        </Divider>

        <Stack>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Cell number={1} id="any" selected winner />
            <Typography> Winner</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Cell number={1} id="any" selected winner={false} />
            <Typography> Default</Typography>
          </Box>
        </Stack>
      </PaperBox>
    </Grid>
  );
};

const WinnerPanel = memo(WinnerPanelBase);

export default WinnerPanel;
