import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Container, IconButton, Tooltip } from '@mui/material';
import { Help as HelpIcon } from '@mui/icons-material';

import { useModal } from 'common/hooks/useModal';
import { HowToPlayModal } from 'modules/Home/components';
// import { ReactComponent as PhantomIcon } from 'common/assets/phantom.svg';
import { AppHeader, NavBar, WalletButton, WalletKey } from './AppBar.styles';

const AppBar: FC = () => {
  const { publicKey } = useWallet();
  const { isOpen, openModal, closeModal } = useModal();

  const pubKey = publicKey?.toBase58();

  return (
    <>
      <AppHeader position="relative">
        <Container maxWidth="xl">
          <NavBar disableGutters>
            <Tooltip title="How to play" placement="right">
              <IconButton onClick={openModal}>
                <HelpIcon />
              </IconButton>
            </Tooltip>

            <WalletButton>
              {pubKey && <WalletKey>{pubKey}</WalletKey>}
              {/* {pubKey ? <WalletKey>{pubKey}</WalletKey> : <PhantomIcon />} */}
            </WalletButton>
          </NavBar>
        </Container>
      </AppHeader>

      <HowToPlayModal isOpen={isOpen} handleClose={closeModal} />
    </>
  );
};

export default AppBar;
