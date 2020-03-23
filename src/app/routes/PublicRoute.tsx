import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type PublicRouteProps = RouteProps & {
  restricted?: boolean,
};

// TODO: check user is authenticated
const PublicRoute = ({ children, restricted = true, ...rest }: PublicRouteProps) => {
  const isAuthenticated = false;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isAuthenticated || !restricted) {
          return children;
        }

        return (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PublicRoute;
