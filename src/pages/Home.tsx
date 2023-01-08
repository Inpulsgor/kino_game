import { FC } from 'react';
import { withMetadata } from 'common/hoc/withMetadata';
import HomeContainer from 'modules/Home/HomeContainer';

const Home: FC = () => <HomeContainer />;

export default withMetadata({
  title: 'Home',
  description: 'Home page',
})(Home);
