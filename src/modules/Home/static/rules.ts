const payouts = [
  { game: 7, counter: 7, multi: 5000 },
  { game: 7, counter: 6, multi: 100 },
  { game: 7, counter: 5, multi: 20 },
  { game: 7, counter: 4, multi: 3 },
  { game: 7, counter: 3, multi: 1 },
  { game: 7, counter: 2, multi: 0 },
  { game: 7, counter: 1, multi: 0 },
  { game: 6, counter: 6, multi: 1600 },
  { game: 6, counter: 5, multi: 50 },
  { game: 6, counter: 4, multi: 7 },
  { game: 6, counter: 3, multi: 1 },
  { game: 6, counter: 2, multi: 0 },
  { game: 6, counter: 1, multi: 0 },
  { game: 5, counter: 5, multi: 450 },
  { game: 5, counter: 4, multi: 20 },
  { game: 5, counter: 3, multi: 2 },
  { game: 5, counter: 2, multi: 0 },
  { game: 5, counter: 1, multi: 0 },
  { game: 4, counter: 4, multi: 100 },
  { game: 4, counter: 3, multi: 4 },
  { game: 4, counter: 2, multi: 1 },
  { game: 4, counter: 1, multi: 0 },
  { game: 3, counter: 3, multi: 25 },
  { game: 3, counter: 2, multi: 2 },
  { game: 3, counter: 1, multi: 0 },
  { game: 2, counter: 2, multi: 5 },
  { game: 2, counter: 1, multi: 1 },
  { game: 1, counter: 1, multi: 2 },
];

export const howToTabs = [
  {
    label: 'How it Works',
    description:
      'Every 600 Slots (around 5 min), a random draw of 12 numbers between 1 -> 58 is made based on the Solana Blockchain. These are the winning numbers.Your goal as a player is to predict some of these numbers beforehand. To do this you can select up to 7 numbers, that you believe will appear in the next draw. Your payout is calculated based on how many correct guesses are present in the numbers you selected. Guessing 3 numbers and having all of them be correct pays out more than guessing 7 numbers and only three of them being correct. Your winnings will be sent directly to the wallet you submitted your guess with shortly after the winning numbers have been drawn. Winning numbers are displayed on the dashboard until the next draw, they are also written on chain and to the shadow drive.',
    payouts: null,
  },
  {
    label: 'Step 1',
    description:
      'Select up to 7 numbers (from 1 to 58), from the select box on the right of your screen by clicking them.',
    payouts: null,
  },
  {
    label: 'Step 2',
    description:
      'Once you are happy with your selections, it is time to submit your bet. For the hackathon, only 1Million BONK bets are allowed. More tokens and custom amounts OTW.',
    payouts: null,
  },
  {
    label: 'Step 3',
    description:
      'Press the BET 1MM BONK button, and approve the transactions to write your prediction on the chain, and bet 1Million BONK.',
    payouts: null,
  },
  {
    label: 'Step 4',
    description:
      'All done!! Now just chill and wait for the next draw. Winnings will be sent automatically to the wallet used to submit the predictions!',
    payouts: null,
  },
  {
    label: 'Payouts',
    description: '',
    payouts,
  },
];
