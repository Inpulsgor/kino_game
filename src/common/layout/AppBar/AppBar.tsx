import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Container, IconButton } from '@mui/material';
import { Help as HelpIcon } from '@mui/icons-material';
// import { NetworkSwitcher, AutoConnect } from 'common/components';
import { ReactComponent as PhantomIcon } from 'common/assets/phantom.svg';
import {
  AppHeader,
  NavBar,
  NetworkControls,
  WalletButton,
  WalletKey,
} from './AppBar.styles';

const AppBar: FC = () => {
  const { connected, publicKey } = useWallet();

  const pubKey = publicKey?.toBase58();

  return (
    <AppHeader position="relative">
      <Container maxWidth="xl">
        <NavBar disableGutters>
          <NetworkControls>
            {/* {connected && (
              <>
                <NetworkSwitcher />
                <AutoConnect />
              </>
            )} */}
            <IconButton>
              <HelpIcon />
            </IconButton>
          </NetworkControls>

          <WalletButton>
            {pubKey ? <WalletKey>{pubKey}</WalletKey> : <PhantomIcon />}
          </WalletButton>
        </NavBar>
      </Container>
    </AppHeader>
  );
};

export default AppBar;
