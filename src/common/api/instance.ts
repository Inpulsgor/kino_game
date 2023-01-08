import axios from 'axios';

export const baseURL =
  'https://shdw-drive.genesysgo.net/8pBwQC1ZiETdAVaJ3JRvxrHmM8z4E3MNxTTpd5x4H7TS/';

export const instance = axios.create({
  baseURL,
});
