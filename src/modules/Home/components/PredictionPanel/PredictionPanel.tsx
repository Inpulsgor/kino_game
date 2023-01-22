import { FC, memo, useState, useCallback, useMemo } from 'react';
import { Unstable_Grid2 as Grid, Divider, Stack, Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, createTransferInstruction } from '@solana/spl-token';

import { ResultsSubmit, PickGrid, MatchNumbers } from 'modules/Home/components';
import { ICell } from 'modules/Home/models/cell';
import { PredictionPanelProps } from './PredictionPanel.types';
import { PaperBox } from './PredictionPanel.styles';

const PredictionPanelBase: FC<PredictionPanelProps> = ({
  cells,
  isLoading,
}) => {
  const [selectedNums, setselectedNums] = useState<ICell[]>([]);

  const { connection } = useConnection();
  const { connected, publicKey, sendTransaction } = useWallet();
  const { enqueueSnackbar } = useSnackbar();

  const isDisabled = !connected || selectedNums.length === 0 || isLoading;

  const numbersList = useMemo(() => {
    return cells.map(cell => {
      const sameCell = selectedNums.find(num => cell.id === num.id);

      if (sameCell) {
        return {
          ...cell,
          selected: true,
        } as ICell;
      }

      return cell;
    });
  }, [cells, selectedNums]);

  const onSelect = useCallback(
    (cellID: string | null) => {
      const selectedCell = cells.find(cell => cell.id === cellID);

      if (selectedNums.length >= 7) {
        return enqueueSnackbar('Maximum 7 numbers', {
          variant: 'warning',
        });
      }

      if (selectedCell) setselectedNums(prev => [...prev, selectedCell]);
    },
    [cells, selectedNums.length, enqueueSnackbar],
  );

  const onRemove = useCallback(
    (cellID: string | null) => {
      const filteredNums = selectedNums.filter(cell => cell.id !== cellID);

      setselectedNums(filteredNums);
    },
    [selectedNums],
  );

  const onSubmit = useCallback(async () => {
    if (selectedNums.length === 0) {
      return enqueueSnackbar('Select numbers before submitting results', {
        variant: 'warning',
      });
    }

    const numsArray = selectedNums.map(({ number }) => number);
    const numsSorted = numsArray.sort((a, b) => a - b);

    const resultString = numsSorted.join('-'); //! result string in format - 1-2-3-4-5-6-7

    if (!publicKey) throw new WalletNotConnectedError();

    // const transaction = new Transaction().add(
    //   createTransferInstruction(
    //     fromTokenAccount.address,
    //     toTokenAccount.address,
    //     fromWallet.publicKey,
    //     1,
    //     [],
    //     TOKEN_PROGRAM_ID,
    //   ),
    // );

    // const signature = await sendTransaction(transaction, connection);

    // await connection.confirmTransaction(signature, 'processed');
  }, [selectedNums, enqueueSnackbar, publicKey, sendTransaction, connection]);

  return (
    <Grid xs={4}>
      <PaperBox>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          <MatchNumbers
            selectedNumbers={selectedNums}
            onSelectNumber={onRemove}
          />

          <PickGrid cells={numbersList} handleSelectNumber={onSelect} />

          <ResultsSubmit onSubmit={onSubmit} isDisabled={isDisabled} />
        </Stack>
      </PaperBox>
    </Grid>
  );
};

const PredictionPanel = memo(PredictionPanelBase);

export default PredictionPanel;
