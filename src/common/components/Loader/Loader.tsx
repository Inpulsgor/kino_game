import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { LoaderProps } from './Loader.types';
import { LoaderBackdrop } from './Loader.styles';

const Loader: FC<LoaderProps> = ({ isLoading = false }) => (
  <LoaderBackdrop open={isLoading} transitionDuration={1}>
    <CircularProgress color="inherit" />
  </LoaderBackdrop>
);

export default Loader;
