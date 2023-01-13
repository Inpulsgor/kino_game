import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

export type AppBasementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AppContainer = styled(Container)({
  minHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: '20px 0',
});

const DevLink = styled(Link)({
  textDecoration: 'none',
});

const Heart = styled(Typography)({
  color: '#FF0000',
}) as typeof Typography;

const AppBasement: FC<AppBasementProps> = () => {
  const currentYear = new Date().getFullYear();

  // Copyright ©
  return (
    <AppContainer maxWidth="xl">
      <Typography variant="body2" component="span">
        Developed with <Heart component="span">♥️</Heart> by{' '}
        <DevLink href="https://metame.vercel.app" target="_blank">
          Metame
        </DevLink>{' '}
        team © {currentYear}
      </Typography>
    </AppContainer>
  );
};

export default AppBasement;
