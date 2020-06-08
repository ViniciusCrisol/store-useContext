import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function RouteWrapper({ isPrivate = false, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === false ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default RouteWrapper;
