export interface InitialAlertState {
  open: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success' | undefined;
}

export const initialAlertState: InitialAlertState = {
  open: false,
  message: '',
  severity: undefined,
};
