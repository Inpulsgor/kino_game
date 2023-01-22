import { FC } from 'react';
import { Fade, CircularProgress } from '@mui/material';

interface PreloaderProps {
  isLoading?: boolean;
}

const Preloader: FC<PreloaderProps> = ({ isLoading = false }) => {
  return (
    <Fade
      unmountOnExit
      in={isLoading}
      style={{
        transitionDelay: isLoading ? '800ms' : '0ms',
      }}
    >
      <CircularProgress color="success" size={28} />
    </Fade>
  );
};

export default Preloader;
