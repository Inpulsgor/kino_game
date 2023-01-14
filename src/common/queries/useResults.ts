import axios from 'axios';
import { useQuery } from 'react-query';

export const useResults = () => {
  return useQuery('results', async () => {
    const { data } = await axios.get(
      'https://shdw-drive.genesysgo.net/C7SzSE5rjPCTAfMksAZAof8R29scoRkcZTqGsENyZDmG/kino-171475800-171476400.txt',
    );

    return data;
  });
};
