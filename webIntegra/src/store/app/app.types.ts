import type { SnackbarMessage, OptionsObject } from 'notistack';

export type Notification = {
  message: SnackbarMessage;
  options?: OptionsObject;
} | null;

export interface AppStore {
  handleError: (error: unknown) => void;

  notification: Notification | null;
  setNotification: (notification: Notification | null) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
