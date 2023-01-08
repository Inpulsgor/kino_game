import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, NotFoundPage } from 'common/routes/routes';
import { AppLayout } from 'common/layout';
import { Loader } from 'common/components';
import { ROUTES } from 'types/enum';

export const RoutesContainer: FC = () => {
  return (
    <Suspense fallback={<Loader isLoading />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
