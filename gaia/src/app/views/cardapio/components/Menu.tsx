import React, { ReactNode } from 'react'

import TextField from '@material-ui/core/TextField';

import Cardapio from '../../../shared/interfaces/menu.interface';
import './Menu.css';

interface Props {
  inputChange: any;
  menu: Cardapio;
  hidden: boolean;
}
interface State {
  errors: any;
  touch: any;
}

class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      errors: {
        pratoPrincipal: false,
        opcao1: false,
        opcao2: false,
        guarnicao1: false,
        guarnicao2: false,
        data: false,
        salada: false,
        sobremesa: false
      },
      touch: {
        pratoPrincipal: false,
        opcao1: false,
        opcao2: false,
        guarnicao1: false,
        guarnicao2: false,
        data: false,
        salada: false,
        sobremesa: false
      }
    }
  }

  setTouch(field: string) {
    this.setState({
      touch: {
        ...this.state.touch,
        [field]: true
      }
    })
    console.log(this.state);

  }

  getErrors(field: string): boolean {
    return this.state.touch[field] && !this.props.menu.pratoPrincipal;
  }

  render(): ReactNode {
    return (
      <form hidden={this.props.hidden}>

        <TextField
          required
          label="Prato Principal"
          className="Cardapio-form-field"
          name="pratoPrincipal"
          margin="normal"
          variant="outlined"
          autoComplete="on"
          onBlur={(this.props.inputChange, () => this.setTouch('pratoPrincipal'))}
          onInput={this.props.inputChange}
          value={this.props.menu.pratoPrincipal}
          error={this.getErrors('pratoPrincipal')}
        />

        <TextField
          required
          label="1ª Opção de troca"
          className="Cardapio-form-field"
          name="opcao1"
          margin="normal"
          variant="outlined"
          autoComplete="on"
          onBlur={(this.props.inputChange, () => this.setTouch('opcao1'))}
          onInput={this.props.inputChange}
          value={this.props.menu.opcao1}
          error={this.getErrors('opcao1')}
        />

        <TextField
          required
          label="2ª Opção de troca"
          className="Cardapio-form-field"
          name="opcao2"
          margin="normal"
          variant="outlined"
          autoComplete="on"
          onBlur={(this.props.inputChange, () => this.setTouch('opcao2'))}
          onInput={this.props.inputChange}
          value={this.props.menu.opcao2}
          error={this.getErrors('opcao2')}
        />

        <TextField
          required
          label="1ª Guarnição"
          className="Cardapio-form-field"
          name="guarnicao1"
          margin="normal"
          variant="outlined"
          autoComplete="on"
          onBlur={(this.props.inputChange, () => this.setTouch('guarnicao1'))}
          onInput={this.props.inputChange}
          value={this.props.menu.guarnicao1}
          error={this.getErrors('guarnicao1')}
        />

        <TextField
          required
          label="2ª Guarnição"
          className="Cardapio-form-field"
          name="guarnicao2"
          margin="normal"
          variant="outlined"
          autoComplete="on"
          onBlur={(this.props.inputChange, () => this.setTouch('guarnicao2'))}
          onInput={this.props.inputChange}
          value={this.props.menu.guarnicao2}
          error={this.getErrors('guarnicao2')}
        />

        <TextField
          required
          label="Salada"
          className="Cardapio-form-field"
          name="salada"
          margin="normal"
          variant="outlined"
          autoComplete="on"
          onBlur={(this.props.inputChange, () => this.setTouch('salada'))}
          onInput={this.props.inputChange}
          value={this.props.menu.salada}
          error={this.getErrors('salada')}
        />

        <TextField
          required
          label="Salada"
          className="Cardapio-form-field"
          name="sobremesa"
          margin="normal"
          variant="outlined"
          autoComplete="on"
          onBlur={(this.props.inputChange, () => this.setTouch('sobremesa'))}
          onInput={this.props.inputChange}
          value={this.props.menu.sobremesa}
          error={this.getErrors('sobremesa')}
        />

        <TextField
          required
          label="Data"
          className="Cardapio-form-field"
          name="data"
          margin="normal"
          variant="outlined"
          autoComplete="on"
          onBlur={(this.props.inputChange, () => this.setTouch('data'))}
          onInput={this.props.inputChange}
          value={this.props.menu.data}
          error={this.getErrors('data')}
        />

      </form>
    )
  }
}

export default Menu
