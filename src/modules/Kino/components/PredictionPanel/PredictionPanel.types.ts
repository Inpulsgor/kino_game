import { Dispatch, SetStateAction } from 'react';
import { ICell } from 'modules/Kino/models/cell';

export interface PredictionPanelProps {
  isLoading: boolean;
  cells: ICell[];
  setCells: Dispatch<SetStateAction<ICell[]>>;
}
