import { FC, useCallback } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Unstable_Grid2 as Grid, Divider, Stack, Box } from '@mui/material';
import { ResultsSubmit, PickGrid, MatchNumbers } from 'modules/Home/components';
import { ICell } from 'modules/Home/models/cell';
import { PredictionPanelProps } from './PredictionPanel.types';
import { PaperBox } from './PredictionPanel.styles';

const PredictionPanel: FC<PredictionPanelProps> = ({ cells, setCells }) => {
  const { register, control, handleSubmit } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'test',
  });

  const onSubmit = useCallback(() => {
    console.log(
      'cells',
      cells.filter(cell => cell.selected),
    );
  }, [cells]);

  const onSelect = useCallback(
    (cellID: string | null) => {
      const updatedCells: ICell[] = cells.map(cell => {
        if (cell.id === cellID) {
          return {
            ...cell,
            selected: true,
          };
        }

        return cell;
      });

      setCells(updatedCells);
    },
    [cells, setCells],
  );

  return (
    <Grid xs={4}>
      <PaperBox sx={{ maxHeight: 'fit-content' }}>
        <Box onSubmit={handleSubmit(onSubmit)} component="form">
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
          >
            <MatchNumbers />

            <PickGrid cells={cells} handleSelectNumber={onSelect} />

            <ResultsSubmit onSubmit={onSubmit} />
          </Stack>
        </Box>
      </PaperBox>
    </Grid>
  );
};

export default PredictionPanel;
