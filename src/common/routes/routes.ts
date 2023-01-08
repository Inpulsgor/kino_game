import { lazy } from 'react';

export const HomePage = lazy(
  () => import('pages/Home' /* webpackChunkName: "HomePage" */),
);

export const NotFoundPage = lazy(
  () => import('pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);
