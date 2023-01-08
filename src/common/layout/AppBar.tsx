import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { styled } from '@mui/system';
import {
  AppBar as AppHeading,
  Container,
  Toolbar,
  Box,
  Typography,
} from '@mui/material';
import { NetworkSwitcher, AutoConnect } from 'common/components';

const AppHeader = styled(AppHeading)({
  gridArea: 'AppBar',
  background: 'transparent',
  zIndex: 99,
});

const NavBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
});

const NetworkControls = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const WalletButton = styled(WalletMultiButton)(({ theme }) => ({
  padding: '8px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
}));

const WalletKey = styled(Typography)({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '140px',
});

const AppBar: FC = () => {
  const { connected, publicKey } = useWallet();

  const pubKey = publicKey ? publicKey?.toBase58() : 'Connect Wallet';

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
          </NetworkControls>

          <WalletButton>
            <WalletKey>{pubKey}</WalletKey>
          </WalletButton>
        </NavBar>
      </Container>
    </AppHeader>
  );
};

export default AppBar;
