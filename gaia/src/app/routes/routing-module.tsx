import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import CommonRoutes from '../routes/common-routes';
import { isAuth } from '../utils/auth';

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
        {
          isAuth()
          ? <CommonRoutes />
          : <Redirect to={{ pathname: `${publicUrl}/login` }} />          
        }
      </Switch>
    );
  }
}

export default RoutingModule
