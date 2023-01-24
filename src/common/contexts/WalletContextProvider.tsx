import { FC, ReactNode, useCallback, useMemo, useEffect } from 'react';
import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import { useSnackbar } from 'notistack';
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

import { AutoConnectProvider, useAutoConnect } from './AutoConnectProvider';
import {
  NetworkConfigurationProvider,
  useNetworkConfiguration,
} from './NetworkConfigurationProvider';

const Wallet: FC<{ children: ReactNode }> = ({ children }) => {
  const { autoConnect } = useAutoConnect();
  const { enqueueSnackbar } = useSnackbar();
  const { networkConfiguration } = useNetworkConfiguration();

  const network = networkConfiguration as WalletAdapterNetwork.Mainnet;
  const endpoint =
    'https://solana-mainnet.g.alchemy.com/v2/tJU39R0J_FS049vOxqzyl4qMGP3F-i1e';
  //const endpoint = useMemo(() => clusterApiUrl('https://solana-mainnet.g.alchemy.com/v2/tJU39R0J_FS049vOxqzyl4qMGP3F-i1e'), [network]);

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
      enqueueSnackbar(
        error.message ? `${error.name}: ${error.message}` : error.name,
        {
          variant: 'error',
        },
      );
    },
    [enqueueSnackbar],
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
