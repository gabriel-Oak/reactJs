import React from 'react';

import { Route, Switch, RouteProps } from 'react-router-dom';
import { commonRoutes, adminRoutes } from './routes';
import NotFound from '../views/not-found/not-found';
import { isAdmin } from '../utils/auth';

interface Props { }

class CommonRoutesModule extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const publicUrl = process.env.PUBLIC_URL;

    return (
      <Switch>
        {
          commonRoutes.map((r: RouteProps, index: number) => (
            <Route key={index} {...r} />
          ))
        }
        {
          isAdmin()
          &&
          adminRoutes.map((r: RouteProps, index: number) => (
            <Route key={index} {...r} />
          ))
        }
        <Route path={`${publicUrl}/**`} component={NotFound} />
      </Switch>
    );
  }
}

export default CommonRoutesModule
