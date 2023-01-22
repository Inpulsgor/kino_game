import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SnackbarProvider } from 'notistack';

import { WalletContextProvider } from 'common/contexts/WalletContextProvider';
import { router } from 'routes/routes';

require('@solana/wallet-adapter-react-ui/styles.css');

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <WalletContextProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </WalletContextProvider>
    </SnackbarProvider>
  </QueryClientProvider>
);

export default App;
