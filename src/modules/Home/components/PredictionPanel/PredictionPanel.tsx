import { FC, memo, useState, useCallback, useMemo, ChangeEvent } from 'react';
import { Unstable_Grid2 as Grid, Divider, Stack } from '@mui/material';
import { useSnackbar } from 'notistack';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  Transaction,
  TransactionInstruction,
  PublicKey,
} from '@solana/web3.js';
import {
  TOKEN_PROGRAM_ID,
  createTransferInstruction,
  getAssociatedTokenAddress,
} from '@solana/spl-token';

import { ResultsSubmit, PickGrid, MatchNumbers } from 'modules/Home/components';
import { ICell } from 'modules/Home/models/cell';
import { PredictionPanelProps } from './PredictionPanel.types';
import { PaperBox } from './PredictionPanel.styles';

const PredictionPanelBase: FC<PredictionPanelProps> = ({
  cells,
  isLoading,
}) => {
  const [selectedNums, setselectedNums] = useState<ICell[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('BONK');
  const [selectedBetAmount, setSelectedBetAmount] = useState<number>(100_000);

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

  const onCurrencyChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedCurrency((event.target as HTMLInputElement).value);
    },
    [],
  );

  const onAmountChange = useCallback((event: any) => {
    setSelectedBetAmount(event.target.value);
  }, []);

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

    const resultString = numsSorted.join('-');
    console.log(resultString);

    if (!publicKey) throw new WalletNotConnectedError();

    //here things are set up to work for SOL transaction
    console.log('preparing to submit');
    //amount of SOL to be sent. 1_000_000 == 0.001SOL so scale accordingly
    const lamportsToSend = 1_000_000;
    //converting the entry wallet to the correct address
    const toKeypair = new PublicKey(
      'kinvUZn9fQ2dGCnqY1hSMEjhdxNKTL7SHAZHtY7siFd',
    );

    //Set up the transaction for SOL based
    //const transferTransaction = new Transaction().add(
    //  SystemProgram.transfer({
    //    fromPubkey: publicKey,
    //    toPubkey: toKeypair,
    //    lamports: lamportsToSend,
    //  }),
    //);

    //Below here is implementation of SPL TOKEN TRANSFER
    //this is the BONK token hash
    const BONK = new PublicKey('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263');

    //this is the bonk token account, linked to the treasury
    const toBonkKeypair = new PublicKey(
      'Cd8FV17MZr2BoWv2vtPqWpD79rTdWUyW4vvcshuBDrkj',
    );

    //get the BONK token account linked to player
    const fromAssociatedTokenAccountPubkey = await getAssociatedTokenAddress(
      BONK,
      publicKey,
    );

    //output to console for personal use/checking
    console.log(fromAssociatedTokenAccountPubkey.toString());
    console.log(toBonkKeypair.toString());
    console.log(publicKey.toString());
    //1_000_00 = 1 BONK
    const scale = 1_000_00;
    //number hardcoded, to become user input
    const betAmount = 1_000_000 * scale;
    //pass in the betAmount as the amount to be transferred.

    //using info above use to send a TX with spl-token
    const transferTransaction = new Transaction().add(
      createTransferInstruction(
        fromAssociatedTokenAccountPubkey,
        toBonkKeypair,
        publicKey, // fromWallet.publicKey,
        betAmount,
        [],
        TOKEN_PROGRAM_ID,
      ),
    );

    //This is the memo part of the transaction, to write the entry on chain
    await transferTransaction.add(
      new TransactionInstruction({
        keys: [{ pubkey: publicKey, isSigner: true, isWritable: true }],
        data: Buffer.from(resultString, 'utf-8'),
        programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
      }),
    );

    //and here we are simple sending the TX and confirming it.
    const signature = await sendTransaction(transferTransaction, connection);
    console.log(signature);

    await connection.confirmTransaction(signature, 'processed');
    console.log('Entry Proccessed');
  }, [selectedNums, enqueueSnackbar, publicKey, sendTransaction, connection]);

  return (
    <Grid xs={12} lg={4}>
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

          <ResultsSubmit
            onSubmit={onSubmit}
            isDisabled={isDisabled}
            selectedBetAmount={selectedBetAmount}
            selectedCurrency={selectedCurrency}
            onAmountChange={onAmountChange}
            onCurrencyChange={onCurrencyChange}
          />
        </Stack>
      </PaperBox>
    </Grid>
  );
};

const PredictionPanel = memo(PredictionPanelBase);

export default PredictionPanel;
