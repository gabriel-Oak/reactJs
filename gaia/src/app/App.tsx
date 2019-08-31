import React, { ReactNode } from 'react';
import './App.css';
import { theme } from './core/theme';

import { Router } from 'react-router-dom';
import RoutingModule from './routes/routing-module';
import { createBrowserHistory } from 'history';

import { observer, inject } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';

import { router } from './store/mobex';
import AppStore from './App.store';

import CssBaseline from '@material-ui/core/CssBaseline';
import SwipeableDrawer from '@material-ui/core/Drawer';
import { ThemeProvider } from '@material-ui/styles';

import { isAuth } from './utils/auth';
import AppBarComponent from './components/AppBar/';
import SimpleSnack from './components/SimpleSnack/';
import SideNav from './components/sideNav/';

interface Props {
  appStore?: AppStore
}

interface State {
  menu: boolean
}

@inject('appStore')
@observer
class App extends React.Component<any> {
  state: State;

  constructor(props: Props) {
    super(props)

    this.state = {
      menu: false
    }

    if (isAuth()) {
      this.props.appStore.setMenus(true);
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({menu: !this.state.menu});
  }

  render(): ReactNode {

    const browserHistory = createBrowserHistory();
    const history = syncHistoryWithStore(browserHistory, router);
    const showMenu = this.props.appStore ? this.props.appStore.getMenus : null;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="Gaia">
          {
            showMenu &&
            <AppBarComponent toggleDrawer={this.toggleDrawer} />
          }
          <SwipeableDrawer open={this.state.menu} onClose={this.toggleDrawer}>
            <SideNav />
          </SwipeableDrawer>
          <Router history={history}>
            <RoutingModule />
          </Router>
        </div>

        <SimpleSnack />
      </ThemeProvider>
    )
  }
}

export default App
