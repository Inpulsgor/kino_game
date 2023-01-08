import { Component, FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface Meta {
  title: string;
  description: string;
}

export const withMetadata = (meta: Meta) => (WrappedRoute: FC) => {
  return class WithMetadata extends Component {
    render() {
      return (
        <>
          <Helmet>
            <title>{meta?.title}</title>
            <meta name="description" content={meta?.description} />
          </Helmet>

          <WrappedRoute {...this.props} />
        </>
      );
    }
  };
};
