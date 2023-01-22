import { ICell } from 'modules/Home/models/cell';

export interface CellProps extends ICell {
  onSelectNumber?: (id: string | null) => void;
  size?: 'small' | 'medium' | 'large';
  color?:
    | 'secondary'
    | 'inherit'
    | 'primary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  disabled?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  gridSize?: number;
  tooltipTitle?: string;
}
