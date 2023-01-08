import { FC } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { initialAlertState, InitialAlertState } from 'types/constants';
import { useNotification } from 'common/contexts/NotificationProvider';

interface NotificationProps {
  alertState?: InitialAlertState;
  setAlertState?: (state: InitialAlertState) => void;
}

const Notification: FC<NotificationProps> = () => {
  const { alertState, setAlertState } = useNotification();

  const onAlertClose = () => setAlertState(initialAlertState);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={alertState.open}
      onClose={onAlertClose}
      autoHideDuration={3000}
    >
      <Alert
        onClose={onAlertClose}
        severity={alertState.severity}
        variant="filled"
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
