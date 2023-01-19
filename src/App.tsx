import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { WalletContextProvider } from 'common/contexts/WalletContextProvider';
import { Notification } from 'common/components';
import { router } from 'routes/routes';

require('@solana/wallet-adapter-react-ui/styles.css');

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <WalletContextProvider>
      <RouterProvider router={router} />
      <Notification />
      <ReactQueryDevtools initialIsOpen={false} />
    </WalletContextProvider>
  </QueryClientProvider>
);

export default App;
