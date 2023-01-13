import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';

export const AppHeader = styled(AppBar)({
  gridArea: 'AppBar',
  background: 'transparent',
  zIndex: 99,
});

export const NavBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
});

export const NetworkControls = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const WalletButton = styled(WalletMultiButton)(() => ({
  padding: '8px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:not([disabled]):hover': {
    background: 'transparent',
  },
  '&:not([disabled]):focus-visible': {
    outlineColor: 'none',
  },

  '&:focus': {
    outline: 'none',
  },
}));

export const WalletKey = styled(Typography)({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '140px',
});
