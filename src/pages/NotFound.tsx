import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import NotFoundContainer from 'modules/NotFound/NotFoundContainer';

const NotFound: FC = () => <NotFoundContainer />;

export default withMetadata({
  title: 'Not found',
  description: "Page doesn't exist",
})(NotFound);
