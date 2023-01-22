import { FC, ReactNode, useCallback, useMemo, useEffect } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { useNotification } from 'common/contexts/NotificationProvider';
import { AutoConnectProvider, useAutoConnect } from './AutoConnectProvider';
import {
  NetworkConfigurationProvider,
  useNetworkConfiguration,
} from './NetworkConfigurationProvider';

const Wallet: FC<{ children: ReactNode }> = ({ children }) => {
  const { autoConnect } = useAutoConnect();
  const { setAlertState } = useNotification();
  const { networkConfiguration } = useNetworkConfiguration();

  const network = networkConfiguration as WalletAdapterNetwork;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  console.log('network :>> ', network);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network],
  );

  const onError = useCallback(
    (error: WalletError) => {
      setAlertState({
        open: true,
        message: error.message ? `${error.name}: ${error.message}` : error.name,
        severity: 'error',
      });
    },
    [setAlertState],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        onError={onError}
        autoConnect={autoConnect}
      >
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <NetworkConfigurationProvider>
        <AutoConnectProvider>
          <Wallet>{children}</Wallet>
        </AutoConnectProvider>
      </NetworkConfigurationProvider>
    </>
  );
};
