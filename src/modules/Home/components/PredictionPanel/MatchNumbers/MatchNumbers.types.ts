import { ICell } from 'modules/Home/models/cell';

export interface MatchNumbersProps {
  selectedNumbers: ICell[];
  onSelectNumber: (id: string | null) => void;
}
