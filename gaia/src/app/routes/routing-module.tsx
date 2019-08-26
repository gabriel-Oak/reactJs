import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import CommonRoutesModule from '../routes/common-routes';
import { isAuth } from '../utils/auth';
import Login from '../views/login/Login';

interface Props { }
interface State { }

class RoutingModule extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const publicUrl = process.env.PUBLIC_URL;

    return (
      <Switch>
        <Route path={`${publicUrl}/login`} component={Login} />
        {          
          isAuth()
          ? <CommonRoutesModule />
          : <Redirect to={{ pathname: `${publicUrl}/login` }} />          
        }
      </Switch>
    );
  }
}

export default RoutingModule
