import React from 'react';

import { Route, Switch, RouteProps } from 'react-router-dom';
import { commonRoutes } from './routes';
import NotFound from '../views/not-found/not-found';
import AdminRoutes from './admin-routes';

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
        
        <AdminRoutes />
        <Route path={`${publicUrl}/**`} component={NotFound} />
      </Switch>
    );
  }
}

export default CommonRoutesModule
