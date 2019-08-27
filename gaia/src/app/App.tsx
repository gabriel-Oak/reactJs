import React, { ReactNode } from 'react';
import { Router } from 'react-router-dom';
import RoutingModule from './routes/routing-module';
import { syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import { router } from './store/mobex';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './core/theme';
import Snackbar from '@material-ui/core/Snackbar';
import { isAuth } from './utils/auth';
import './App.css';
import { observer, inject } from 'mobx-react';
import AppStore from './App.store';

interface Props {
  appStore?: AppStore
}

interface State {
  snacks: {
    state: boolean,
    message: string
  }
}

@inject('appStore')
@observer
class App extends React.Component<Props> {
  state: State;

  constructor(props: Props) {
    super(props)

    this.state = {
      snacks: {
        state: false,
        message: ''
      }
    }

    this.openSnack = this.openSnack.bind(this);
    this.closeSnack = this.closeSnack.bind(this);
    if (this.props.appStore && isAuth()){
      this.props.appStore.setMenus(true);
      
    }
    
  }

  openSnack(message: string) {
    this.setState({
      snacks: {
        state: true,
        message: message
      }
    });
  }

  closeSnack(event: any, reason: any) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      snacks: {
        state: false,
      }
    });
  }

  render(): ReactNode {

    const browserHistory = createBrowserHistory();
    const history = syncHistoryWithStore(browserHistory, router);
    const showMenu = this.props.appStore ? this.props.appStore.getMenus : null;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="Gaia">
          { showMenu && 'Teste de menu'}
          <Router history={history}>
            <RoutingModule />
          </Router>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.appStore?false:false}
          autoHideDuration={6000}
          onClose={this.closeSnack}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span>{this.state.snacks.message}</span>}
        />
      </ThemeProvider>
    )
  }
}

export default App
