import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

export type AppContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Main = styled('main')({
  gridArea: 'AppContent',
  height: '100%',
  width: '100%',
});

const AppContainer = styled(Container)({
  minHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
});

const AppContent: FC<AppContentProps> = ({ children }) => (
  <Main>
    <AppContainer maxWidth="xl">{children}</AppContainer>
  </Main>
);

export default AppContent;
