import { Dispatch, SetStateAction } from 'react';
import { ICell } from 'modules/Home/models/cell';

export interface PredictionPanelProps {
  cells: ICell[];
  setCells: Dispatch<SetStateAction<ICell[]>>;
}
