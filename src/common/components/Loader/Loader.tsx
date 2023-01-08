import { FC } from 'react';
// eslint-disable-next-line import/named
import { Backdrop, CircularProgress, Theme } from '@mui/material';

interface LoaderProps {
  isLoading: boolean;
}

export const styles = {
  backdrop: {
    color: 'custom.white',
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
  },
};

const Loader: FC<LoaderProps> = ({ isLoading = false }) => (
  <Backdrop sx={styles.backdrop} open={isLoading}>
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default Loader;
