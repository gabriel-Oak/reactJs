import React from 'react'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppStore from '../../App.store';
import SnackStore from '../../components/SimpleSnack/snack.stores';

import { setTitle } from '../../utils/titleService';
import * as UserService from '../../core/api/user-service';
import { setUser, isAuth } from '../../utils/auth';
import './Login.css';
import { observer, inject } from 'mobx-react';

interface Props {
  appStore: AppStore,
  snackStore: SnackStore
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

@inject('appStore', 'snackStore')
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

    if (isAuth()) this.redirect();

    setTitle('Login');
    this.inputChange = this.inputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.snackStore.openSnack(`Bem vindo ${res.data.nome}`);
        this.logged();

      })
      .catch(e => this.props.snackStore.openSnack('Algo deu errado :/'))
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
      </div>
    )
  }
}

export default Login
