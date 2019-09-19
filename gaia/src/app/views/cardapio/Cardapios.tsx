import React from 'react';

import { observer, inject } from 'mobx-react';
import AppStore from '../../App.store';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Cardapio from '../../shared/interfaces/menu.interface';
import Loading from '../../shared/components/loading/';
import Menus from './components/Menus';

import { getMenus } from '../../core/api/cardapio-service';
import { setTitle } from '../../utils/titleService';
import SnackStore from '../../components/SimpleSnack/snack.stores';

interface Props { }
interface State {
  loading: boolean,
  confirmAction: boolean,
  menus: Array<Cardapio>
}

class Cardapios extends React.Component<Props, State> {
  state: State;
  buttonRef: React.RefObject<HTMLButtonElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      confirmAction: false,
      loading: true,
      menus: []
    }

    this.buttonRef = React.createRef();

    this.getMenus();

    this.inputChange = this.inputChange.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  getMenus() {
    getMenus()
      .then(res => {
        const menus = this.sortMenus(res.data);        
        this.setState({
          menus: menus
        });
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        this.setState({loading: false });
      })
  }

  sortMenus(menus: Array<Cardapio>): Array<Cardapio> {
    return menus.sort((a,b) => {
      const dateA = new Date(a.data).getDay();
      const dateB = new Date(b.data).getDay();
      if (dateA > dateB) return 1;
      else if (dateA < dateB) return -1;
      else return 0;
    });
  }

  submitChange() {
    this.setState({
      confirmAction: true
    })
  }

  handleAction(e: any) {
    this.setState({
      confirmAction: false
    })
    // e.target.innerText === 'Sim' && 'faça algo';
  }

  inputChange(menus: Array<Cardapio>): void {
    console.log(menus);
    
    this.setState({
      menus: menus
    });
  }

  render() {

    return (
      <div className="Cardapio Center-container-Vertical s840">
        <Card>

          <CardContent>
            {
              this.state.menus.length 
              ? <Menus menus={this.state.menus} inputChange={this.inputChange} />
              : this.state.loading
              ? <Loading /> : <h1>Erro ao buscar cardapios :/</h1>
            }
          </CardContent>

          <CardActions className="button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={this.submitChange}
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
              <h4 className="Home-confirm-title">Salvar cardapios?</h4>
              <MenuItem onClick={this.handleAction}>Sim</MenuItem>
              <MenuItem onClick={this.handleAction}>Não</MenuItem>
            </Menu>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Cardapios;