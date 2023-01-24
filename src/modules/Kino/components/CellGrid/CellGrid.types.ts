import { ICell } from 'modules/Kino/models/cell';

export interface CellGridProps {
  cells: ICell[];
  onSelectNumber?: (id: string | null) => void;
}
