import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../views/login/Login';

interface Props { }
interface State { }

class CommonRoutes extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const publicUrl = process.env.PUBLIC_URL;

    return (
      <Switch>
        <Route exact={true} path={`${publicUrl}/login`} component={Login} />
      </Switch>            
    );
  }
}

export default CommonRoutes
