import { ICell } from 'modules/Home/models/cell';

export interface CellGridProps {
  cells: ICell[];
  onSelectNumber: (id: string | null) => void;
}
