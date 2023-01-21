export interface ICell {
  number: number;
  id: string | null;
  selected: boolean;
  winner: boolean;
}

export interface IField {
  id: string | null;
}
