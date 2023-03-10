import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import KinoContainer from 'modules/Kino/KinoContainer';

const Kino: FC = () => <KinoContainer />;

export default withMetadata({
  title: 'Kino',
  description: 'Kino page',
})(Kino);
