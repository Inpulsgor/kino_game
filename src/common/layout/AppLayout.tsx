import { FC, ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

import { AppBar, AppContent, AppBasement } from 'common/layout';
import { Loader } from 'common/components';

export interface AppLayoutProps {
  children?: ReactNode;
}

const Layout = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  gridTemplateAreas: `
		"AppBar"
		"AppContent"
		"AppBasement"
	`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

const AppLayout: FC<AppLayoutProps> = () => (
  <Layout>
    <AppBar />
    <AppContent>
      <Suspense fallback={<Loader isLoading />}>
        <Outlet />
      </Suspense>
    </AppContent>
    <AppBasement />
  </Layout>
);

export default AppLayout;
