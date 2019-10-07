import React, { ReactNode, FormEvent } from 'react'

import DateFnsUtils from '@date-io/date-fns';

import { setMenus } from '../../../core/api/cardapio-service';

import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './Menu.css';
import SnackStore from '../../../components/SimpleSnack/snack.stores';

interface Props {
  snackStore: SnackStore;
  inputChange: any;
  menu: any;
  hidden: boolean;
  day: number;
}
interface State {
  confirmAction: boolean,
  errors: any;
  loading: boolean,
  touch: any;
}

class MenuItens extends React.Component<Props, State> {
  buttonRef: React.RefObject<HTMLButtonElement>;

  constructor(props: Props) {
    super(props)

    this.state = {
      confirmAction: false,
      loading: false,
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

    this.buttonRef = React.createRef();
    this.handleAction = this.handleAction.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  setTouch(field: string) {
    this.setState({
      touch: {
        ...this.state.touch,
        [field]: true
      }
    });
  }

  getErrors(field: string): boolean {
    return this.state.touch[field] && !this.props.menu[field];
  }

  handleDateChange(date: Date | null) {
    this.setTouch('data');

    if (date)
      date = date.getDay() === this.props.day ? date : null;

    this.props.inputChange({
      target: {
        name: 'data',
        value: date
      }
    })
  }

  handleAction(e: any) {
    this.setState({
      confirmAction: false
    })
    if (e.target.innerText === 'Sim')
      this.alterMenu();
  }

  alterMenu() {
    this.setState({loading: true});
    setMenus(this.props.menu)
      .then(
        () => this.props.snackStore
          .openSnack('Cardapio alterado com sucesso', 'success')
      )
      .catch(
        () => this.props.snackStore
          .openSnack('Ocorreu algum erro com a operação', 'error')
      )
      .finally(
        () => this.setState({loading: false})
      );
  }

  submitChange(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({
      confirmAction: true
    })
  }

  render(): ReactNode {
    return (
      <div hidden={this.props.hidden}>
        <form className="Cardapios-menu-form" onSubmit={this.submitChange}>
          <CardContent>
            <TextField
              required
              label="Prato Principal"
              className="Cardapio-form-field"
              name="pratoPrincipal"
              margin="normal"
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
              onBlur={(this.props.inputChange, () => this.setTouch('sobremesa'))}
              onInput={this.props.inputChange}
              value={this.props.menu.sobremesa}
              error={this.getErrors('sobremesa')}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                name="data"
                required
                label="Data"
                value={this.props.menu.data}
                className="Cardapio-form-field"
                onChange={this.handleDateChange}
                error={this.getErrors('data')}
                helperText={
                  this.getErrors('data')
                  && 'Preencha uma data correta!'
                }
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </CardContent>

          <CardActions className="button-container" hidden={this.props.hidden}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              ref={this.buttonRef}
              disabled={this.state.loading}
            >
              {this.state.loading ? <CircularProgress size={24} /> : 'Salvar'}
            </Button>

            <Menu
              keepMounted
              anchorEl={this.buttonRef.current}
              open={this.state.confirmAction}
              onClose={this.handleAction}
            >
              <h4 className="Home-confirm-title">Salvar cardapio?</h4>
              <MenuItem onClick={this.handleAction}>Sim</MenuItem>
              <MenuItem onClick={this.handleAction}>Não</MenuItem>
            </Menu>
          </CardActions>
        </form>
      </div>
    )
  }
}

export default MenuItens
