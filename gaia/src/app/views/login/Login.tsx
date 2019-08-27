import React from 'react'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import AppStore from '../../App.store';

import { setTitle } from '../../utils/titleService';
import * as UserService from '../../api/user-service';
import { setUser, isAuth } from '../../utils/auth';
import './Login.css';
import { observer, inject } from 'mobx-react';

interface Props {
  appStore: AppStore
}

interface State {
  user: string,
  senha: string
  touch: {
    user: boolean,
    senha: boolean
  }
  loading: boolean
  snacks: {
    state: boolean,
    message: string
  }
}

@inject('appStore')
@observer
class Login extends React.Component<Props> {
  state: State;

  constructor(props: Props) {
    super(props)

    this.state = {
      user: '',
      senha: '',
      touch: {
        user: false,
        senha: false,
      },
      loading: false,
      snacks: {
        state: false,
        message: ''
      }
    }

    setTitle('Login');
    this.inputChange = this.inputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openSnack = this.openSnack.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    if (isAuth()) this.logged();
  }

  inputChange(e: any): void {
    this.setState({
      [e.target.name]: e.target.value,
      touch: {
        ...this.state.touch,
        [e.target.name]: true
      }
    });
  }

  getErrors(field: 'user' | 'senha'): boolean {
    return !this.state[field] && this.state.touch[field];
  }

  redirect(): void {
    this.props.appStore.setMenus(true);
    window.location.href = process.env.PUBLIC_URL + '/home';
  }

  openSnack(message: string) {
    this.setState({
      snacks: {
        state: true,
        message: message
      }
    });
  }

  handleClose(event: any, reason: any) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      snacks: {
        state: false,
        fail: false
      }
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    this.setState({
      loading: true
    });

    UserService
      .login({
        user: this.state.user,
        senha: this.state.senha
      })
      .then((res: any) => {

        setUser(res.data);
        this.openSnack(`Bem vindo ${res.data.nome}`);
        this.logged();
      })
      .catch(e => this.openSnack('Algo deu errado :/'))
      .finally(() => {
        this.setState({
          loading: false
        })
      });
  }

  logged() {    
    setTimeout(() => {
      this.redirect();
    }, 2000);
  }

  render() {
    return (
      <div>
        <div className="Login Center-container s600">
          <Card>

            <CardHeader title="Login" />

            <form onSubmit={this.handleSubmit}>
              <CardContent className="Login-form">

                <TextField
                  required
                  label="Usuário"
                  className="Login-form-field"
                  name="user"
                  margin="normal"
                  variant="outlined"
                  autoComplete="off"
                  onBlur={this.inputChange}
                  onInput={this.inputChange}
                  value={this.state.user}
                  error={this.getErrors('user')}
                />

                <TextField
                  required
                  label="Senha"
                  className="Login-form-field"
                  name="senha"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  autoComplete="off"
                  onBlur={this.inputChange}
                  onInput={this.inputChange}
                  value={this.state.senha}
                  error={this.getErrors('senha')}
                />


              </CardContent>
              <CardActions className="button-container">
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? <CircularProgress size={24} /> : 'Entrar'}
                </Button>
              </CardActions>
            </form>

          </Card>
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snacks.state}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span>{this.state.snacks.message}</span>}
        />
      </div>
    )
  }
}

export default Login
