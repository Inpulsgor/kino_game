import { v4 as uuidv4 } from 'uuid';
import { ICell, IField } from 'modules/Home/models/cell';

export const generateCells = (cellsLength: number = 58) => {
  const cell: ICell = {
    id: null,
    number: 0,
    selected: false,
    winner: false,
  };

  const cells: ICell[] = new Array(cellsLength)
    .fill(cell)
    .map((cell, index) => ({
      ...cell,
      number: index + 1,
      id: uuidv4(),
    }));

  return cells;
};

export const a11yProps = (index: number) => {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
};

export const generateMatchFields = (fieldsLength: number = 12) => {
  const field: IField = {
    id: null,
  };

  const fields: IField[] = new Array(fieldsLength)
    .fill(field)
    .map((field, index) => ({
      id: uuidv4(),
    }));

  return fields;
};
