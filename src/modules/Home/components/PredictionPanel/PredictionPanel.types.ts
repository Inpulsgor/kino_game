import { ICell } from 'modules/Home/models/cell';

export interface PredictionPanelProps {
  cells: ICell[];
  onSelect: (cellID: string | null) => void;
  onSubmit: () => void;
}
