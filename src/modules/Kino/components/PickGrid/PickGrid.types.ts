import { ICell } from 'modules/Kino/models/cell';

export interface PickGridProps {
  cells: ICell[];
  handleSelectNumber: (id: string | null) => void;
}
