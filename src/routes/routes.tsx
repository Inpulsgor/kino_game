import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout } from 'common/layout';
import { ROUTES } from 'types/enum';

export const KinoPage = lazy(
  () => import('pages/Kino' /* webpackChunkName: "KinoPage" */),
);

export const NotFoundPage = lazy(
  () => import('pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.KINO} element={<AppLayout />}>
        <Route index element={<KinoPage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />,
    </>,
  ),
);
