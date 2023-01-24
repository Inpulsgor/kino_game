import { ICell } from 'modules/Kino/models/cell';

export interface MatchNumbersProps {
  selectedNumbers: ICell[];
  onSelectNumber: (id: string | null) => void;
}
