import React from 'react'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import { setTitle } from '../../utils/titleService';
import * as UserService from '../../api/user-service';
import { setUser } from '../../utils/auth';
import './Login.css';

interface Props { }
interface State {
  user: string,
  senha: string
  touch: {
    user: boolean,
    senha: boolean
  }
  loading: boolean
}

class Login extends React.Component {
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
      loading: false
    }

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
      .then( (res: any) => {

        setUser(res.data);
        this.redirect();

      })
      .catch(e => console.log(e))
      .finally(() => {
        this.setState({
          loading: false
        })
      });
  }

  render() {
    return (
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
    )
  }
}

export default Login
