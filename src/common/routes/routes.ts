import { lazy } from 'react';

export enum ROUTES {
  HOME = '/',
  NOT_FOUND = '*',
}

export const HomePage = lazy(
  () => import('pages/Home' /* webpackChunkName: "HomePage" */),
);

export const NotFoundPage = lazy(
  () => import('pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);
