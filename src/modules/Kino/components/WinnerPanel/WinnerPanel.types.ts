import { ICell } from 'modules/Kino/models/cell';

export interface WinnerPanelProps {
  progress: number;
  results: ICell[];
  isLoading: boolean;
}
