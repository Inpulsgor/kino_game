import { FC, memo } from 'react';
import { Unstable_Grid2 as Grid, Chip, Divider } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { ProgressBar } from 'common/components';
import { ResultsGrid } from 'modules/Home/components';
import { WinnerPanelProps } from './WinnerPanel.types';
import { PaperBox } from './WinnerPanel.styles';

const WinnerPanelBase: FC<WinnerPanelProps> = ({
  progress,
  results,
  isLoading,
}) => {
  return (
    <Grid xs={8} sx={{ alignSelf: 'stretch' }}>
      <PaperBox>
        <ProgressBar
          progress={Number(progress.toFixed(2))}
          isLoading={isLoading}
        />

        <Divider textAlign="left" sx={{ marginBottom: 4 }}>
          <Chip label="Winning numbers" icon={<CheckCircle />} />
        </Divider>

        <ResultsGrid cells={results} />
      </PaperBox>
    </Grid>
  );
};

const WinnerPanel = memo(WinnerPanelBase);

export default WinnerPanel;
