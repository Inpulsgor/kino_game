import { v4 as uuidv4 } from 'uuid';
import { ICell } from 'modules/Kino/models/cell';
import { cell } from './constants';

export const generateCells = (cellsLength: number = 58) => {
  const cells: ICell[] = new Array(cellsLength)
    .fill(cell)
    .map((cell, index) => ({
      ...cell,
      number: index + 1,
      id: uuidv4(),
    }));

  return cells;
};

export const generateMatchFields = (fieldsLength: number = 7) => {
  const cells: ICell[] = new Array(fieldsLength).fill(cell).map(cell => ({
    id: uuidv4(),
    ...cell,
  }));

  return cells;
};

export const a11yProps = (index: number) => {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
};
