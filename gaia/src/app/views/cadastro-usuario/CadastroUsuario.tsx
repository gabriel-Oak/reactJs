import React, { PureComponent, ReactNode, SyntheticEvent } from 'react'
import { setTitle } from '../../utils/titleService';
import AppStore from '../../App.store';
import SnackStore from '../../components/SimpleSnack/snack.stores';
import { inject, observer } from 'mobx-react';
import { Card, CardActions, CardContent, Button } from '@material-ui/core';

interface Props {
  appStore: AppStore;
  snackStore: SnackStore;
}
interface State {
  user: {
    user?: string;
    name?: string;
    email?: string;
    password?: string;
  };
  confirmPassword: string;
}

@inject('appStore', 'snackStore')
@observer
class CadastroUsuario extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    const title = 'Cadastrar usuário';

    this.state = {
      user: {},
      confirmPassword: ''
    }

    setTitle(title);
    this.props.appStore.setTitle(title);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e: SyntheticEvent) {
    e.preventDefault();
  }

  render(): ReactNode {
    return (
      <div className="CadastroUsuario Center-container-Vertical s840">
        <Card>
          <form className="form" onSubmit={this.submitHandler}>
            <CardContent>

            </CardContent>
            
            <CardActions className="button-container">
              <Button 
                variant="contained" 
                color="primary"
                type="submit"
              >
                Salvar
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

export default CadastroUsuario
