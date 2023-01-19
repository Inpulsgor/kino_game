import axios from 'axios';
import { useQuery } from 'react-query';
import { ResultsResponse } from 'modules/Home/models/results';

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
