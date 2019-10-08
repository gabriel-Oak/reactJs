import React from 'react';

import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import { commonRoutes } from './routes';

interface Props { }

class CommonRoutesModule extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render() {

    return (
      <Switch>
        {
          commonRoutes.map((r: RouteProps, index: number) => (
            <Route key={index} {...r} />
          ))
        }

        <Redirect to="not-found" />
      </Switch>
    );
  }
}

export default CommonRoutesModule
