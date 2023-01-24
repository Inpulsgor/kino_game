import { FC } from 'react';
import { Typography } from '@mui/material';
import { ReactComponent as MetameLogo } from 'common/assets/logo.svg';
import { AppBasementProps } from './AppBasement.types';
import { AppContainer, Copyright, DevLink } from './AppBasement.styles';

const AppBasement: FC<AppBasementProps> = () => {
  const currentYear = new Date().getFullYear();

  // Copyright ©
  return (
    <AppContainer maxWidth="xl">
      <Copyright>
        <Typography variant="body2" component="span">
          Developed by
        </Typography>

        <DevLink href="https://twitter.com/metamenft" target="_blank">
          <MetameLogo />
        </DevLink>

        <Typography variant="body2" component="span">
          team © {currentYear}
        </Typography>
      </Copyright>
    </AppContainer>
  );
};

export default AppBasement;
