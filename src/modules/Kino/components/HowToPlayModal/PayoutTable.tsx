import { FC } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { Payout } from './TabPanel';

export interface PayoutTableProps {
  payouts: Payout[];
}

const PayoutTable: FC<PayoutTableProps> = ({ payouts }) => {
  return (
    <TableContainer sx={{ maxHeight: 400 }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Game</TableCell>
            <TableCell>Counter</TableCell>
            <TableCell>Multi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payouts.map((payout, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {payout.game}
              </TableCell>
              <TableCell>{payout.counter}</TableCell>
              <TableCell>{payout.multi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PayoutTable;
