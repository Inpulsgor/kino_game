import { useState, useEffect, useMemo } from 'react';
import { generateCells } from 'modules/Home/helpers/functions';
import { ICell } from 'modules/Home/models/cell';

export const useCells = () => {
  const [cells, setCells] = useState<ICell[]>([]);

  useEffect(() => {
    const cells = generateCells();

    if (cells?.length > 0) {
      setCells(cells);
    }
  }, []);

  const selectedNCells = useMemo(() => {
    return cells.filter(({ selected }: ICell) => selected);
  }, [cells]);

  return {
    cells,
    setCells,
    selectedNCells,
  };
};
