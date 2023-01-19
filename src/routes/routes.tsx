import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout } from 'common/layout';
import { ROUTES } from 'types/enum';

export const HomePage = lazy(
  () => import('pages/Home' /* webpackChunkName: "HomePage" */),
);

export const NotFoundPage = lazy(
  () => import('pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />,
    </>,
  ),
);
