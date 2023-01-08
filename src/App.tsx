import { FC } from 'react';
import { WalletContextProvider } from 'common/contexts/WalletContextProvider';
import { RoutesContainer } from 'common/routes/RoutesContainer';
import { Notification } from 'common/components';

require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
  return (
    <WalletContextProvider>
      <RoutesContainer />
      <Notification />
    </WalletContextProvider>
  );
};

export default App;
