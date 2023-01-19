import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
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

const Copyright = styled(Box)({
  display: 'flex',
  gap: 4,
});

const DevLink = styled(Link)({
  textDecoration: 'none',
  textTransform: 'uppercase',
});

const AppBasement: FC<AppBasementProps> = () => {
  const currentYear = new Date().getFullYear();

  // Copyright ©
  return (
    <AppContainer maxWidth="xl">
      <Copyright>
        <Typography variant="body2" component="span">
          Developed with
        </Typography>

        <FavoriteIcon
          sx={{ color: '#FF0000', width: '18px', height: '18px' }}
        />

        <Typography variant="body2">
          by{' '}
          <DevLink href="https://metame.vercel.app" target="_blank">
            metame
          </DevLink>
        </Typography>

        <Typography variant="body2" component="span">
          team © {currentYear}
        </Typography>
      </Copyright>
    </AppContainer>
  );
};

export default AppBasement;
