import { FC, createContext, ReactNode, useContext, useState } from 'react';
import { initialAlertState, InitialAlertState } from 'types/constants';

export interface NotificationContextState {
  alertState: InitialAlertState;
  setAlertState: (state: InitialAlertState) => void;
}

export const NotificationContext = createContext<NotificationContextState>(
  {} as NotificationContextState,
);

export function useNotification(): NotificationContextState {
  return useContext(NotificationContext);
}

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alertState, setAlertState] =
    useState<InitialAlertState>(initialAlertState);

  return (
    <NotificationContext.Provider value={{ alertState, setAlertState }}>
      {children}
    </NotificationContext.Provider>
  );
};
