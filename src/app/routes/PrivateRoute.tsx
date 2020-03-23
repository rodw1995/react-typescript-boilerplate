import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// TODO: check user is authenticated
const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = false;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuthenticated) {
          return children;
        }

        return (
          <Redirect
            to={{
              pathname: '/signIn',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
