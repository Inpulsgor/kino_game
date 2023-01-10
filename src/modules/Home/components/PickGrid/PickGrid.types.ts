import { ICell } from 'modules/Home/models/cell';

export interface PickGridProps {
  cells: ICell[];
  handleSelectNumber: (id: string | null) => void;
}
