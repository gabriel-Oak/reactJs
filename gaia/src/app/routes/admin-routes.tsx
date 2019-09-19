import React from 'react';

import { Route, RouteProps } from 'react-router-dom';
import { adminRoutes } from './routes';
import { isAdmin } from '../utils/auth';

interface Props { }

class AdminRoutes extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        {
          isAdmin()
          &&
          adminRoutes.map((r: RouteProps, index: number) => (
            <Route key={index} {...r} />
          ))
        }
      </>
    );
  }
}

export default AdminRoutes;
