import { ICell } from 'modules/Home/models/cell';

export interface CellProps extends ICell {
  onSelectNumber: (id: string | null) => void;
}
