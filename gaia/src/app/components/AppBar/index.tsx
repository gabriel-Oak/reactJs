import React, { ReactNode } from 'react'

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { observer, inject } from 'mobx-react';

import { logOut } from '../../utils/auth';
import './appBar.css';

interface State { }

@inject('appStore')
@observer
class AppBarComponent extends React.Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = {

    }
  }

  logOut() {
    logOut();
  }

  render(): ReactNode {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <i className="material-icons">
              menu
            </i>
          </IconButton>
          <Typography className="AppBar-title" variant="h6">
            {this.props.appStore.getTitle}
          </Typography>
          <Button color="inherit" onClick={this.logOut}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default AppBarComponent
