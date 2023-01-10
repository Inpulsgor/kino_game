import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Container, Typography } from '@mui/material';
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

const AppBasement: FC<AppBasementProps> = () => {
  const currentYear = new Date().getFullYear();

  // Copyright ©

  return (
    <AppContainer maxWidth="xl">
      <Typography variant="body2" component="span">
        Developed with ♥️ by Metame team © {currentYear}
      </Typography>
    </AppContainer>
  );
};

export default AppBasement;
