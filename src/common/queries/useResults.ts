import axios from 'axios';
import { useQuery } from 'react-query';

export interface ResultsResponse {
  current_winner_slot: number;
  current_winner_blockhash: string;
  current_winner_numbers: number[];
  slot_now: number;
  next_winner_slot: number;
  snooze: number;
}

const fetchResults = async () => {
  const { data } = await axios.get('https://li3m19.deta.dev/');

  return data;
};

export const useResults = () => {
  return useQuery<ResultsResponse>({
    queryKey: 'results',
    queryFn: fetchResults,
  });
};
