import React from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';
import { commonRoutes, adminRoutes } from './routes';
import { isAdmin } from '../utils/auth';

interface Props { }
interface State { }

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
        {
          isAdmin()
          &&
          adminRoutes.map((r: RouteProps, index: number) => (
            <Route key={index} {...r} />
          ))
        }
      </Switch>
    );
  }
}

export default CommonRoutesModule
