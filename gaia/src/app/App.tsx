import React, { ReactNode } from 'react';
import { Router } from 'react-router-dom';
import RoutingModule from './routes/routing-module';
import { syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import { router } from './store/mobex';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './core/theme';

import './App.css';

interface Props { }
interface State { }


class App extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  setTitle() {
    return 'Gaia - SMN'
  }

  render(): ReactNode {

    const browserHistory = createBrowserHistory();
    const history = syncHistoryWithStore(browserHistory, router);

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="Gaia">
          <Router history={history}>
            <RoutingModule />
          </Router>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
