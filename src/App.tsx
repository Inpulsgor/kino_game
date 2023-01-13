import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { WalletContextProvider } from 'common/contexts/WalletContextProvider';
import { RoutesContainer } from 'common/routes/RoutesContainer';
import { Notification } from 'common/components';

require('@solana/wallet-adapter-react-ui/styles.css');

// Create a client
const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletContextProvider>
        <RoutesContainer />
        <Notification />
        <ReactQueryDevtools initialIsOpen={false} />
      </WalletContextProvider>
    </QueryClientProvider>
  );
};

export default App;
