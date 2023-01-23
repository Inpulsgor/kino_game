import { Wallet } from '@mui/icons-material';
import { drawerClasses } from '@mui/material';
import { addScaleCorrector } from 'framer-motion';

export const howToTabs = [
  {
    label: 'How it Works',
    description:
      'Every 600 Slots (around 5 min), a random draw of 12 numbers between 1 -> 58 is made based on the Solana Blockchain. These are the winning numbers.Your goal as a player is to predict some of these numbers beforehand. To do this you can select up to 7 numbers, that you believe will appear in the next draw. Your payout is calculated based on how many correct guesses are present in the numbers you selected. Guessing 3 numbers and having all of them be correct pays out more than guessing 7 numbers and only three of them being correct. Your winnings will be sent directly to the wallet you submitted your guess with shortly after the winning numbers have been drawn. Winning numbers are displayed on the dashboard until the next draw, they are also written on chain and to the shadow drive.',
  },
  {
    label: 'Step 1',
    description:
      'Select up to 7 numbers (from 1 to 58), from the select box on the right of your screen by clicking them.',
  },
  {
    label: 'Step 2',
    description:
      'Once you are happy with your selections, it is time to submit your bet. For the hackathon, only 1Million BONK bets are allowed. More tokens and custom amounts OTW.',
  },
  {
    label: 'Step 3',
    description:
      'Press the BET 1MM BONK button, and approve the transactions to write your prediction on the chain, and bet 1Million BONK.',
  },
  {
    label: 'Step 4',
    description:
      'All done!! Now just chill and wait for the next draw. Winnings will be sent automatically to the wallet used to submit the predictions!',
  },
  {
    label: 'Payouts',
    description: 'Game | Counter | Multi fill in table here ',
  },
];
