import React from 'react'

import { observer, inject } from 'mobx-react';
import AppStore from '../../App.store';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import { setTitle } from '../../utils/titleService';
import { getMenus } from '../../core/api/cardapio-service';
import { getTrocasUser, postChange, putChange } from '../../core/api/troca-service';
import Cardapio from '../../shared/interfaces/menu.interface';
import Menus from './components/Menus';
import Loading from '../../shared/components/loading/';
import { getUser } from '../../utils/auth';

import './Home.css';
import User from '../../shared/interfaces/user.interface';
import Troca from '../../shared/interfaces/troca.interface';
import SnackStore from '../../components/SimpleSnack/snack.stores';

interface Props {
  appStore: AppStore,
  snackStore: SnackStore
}
interface State {
  menus: Array<Cardapio>,
  confirmAction: boolean,
  loading: boolean
}
@inject('appStore', 'snackStore')
@observer
class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      menus: [],
      confirmAction: false,
      loading: true
    }

    this.user = getUser();

    this.props.appStore.setTitle('Home');
    setTitle('Home');

    this.getMenus();
    this.anchorRef = React.createRef();
    this.handleMenu = this.handleMenu.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.submitChoice = this.submitChoice.bind(this);
  }
  anchorRef: React.RefObject<HTMLButtonElement>;
  user: User;

  handleMenu(e: React.ChangeEvent<{ name: number, value: string }>) {
    const menus = this.state.menus;
    menus[e.target.name].chosed = e.target.value;

    this.setState({
      ...this.state,
      menus: menus,
    });
  }

  getTrocas() {
    getTrocasUser(this.user._id)
      .then((res: {data:[Troca]}) => {
          this.setOptions(res.data);
        })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  }

  setOptions(trocas: Array<Troca>) {
    const menus = this.state.menus;
    trocas.forEach(troca => {
      menus.forEach(menu => {
        if (menu._id === troca.cardapio)
          menu.chosed = troca.pratoPrincipal;
      });
    });
    
    this.setState({menus: menus});
  }

  getMenus() {
    getMenus()
      .then(res => {
        const menus = this.sortMenus(res.data);        
        this.setState({
          menus: menus
        });
        this.getTrocas();
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

  handleAction(e: any) {
    this.setState({
      confirmAction: false
    })

    e.target.innerText === 'Sim' && this.sendChanges();
  }

  sendChanges() {
    this.setState({ loading: true });
    getTrocasUser(this.user._id)
      .then(res => {
          this.verifyTrocas(res.data);
        })
      .catch(e => {
        this.setState({
          loading: false
        })
      })
  }

  verifyTrocas(trocas: Array<Troca>) {
    
    const promises = this.state.menus.map(menu => {
      let trocaId;
      trocas.forEach(troca => {
        if (troca.cardapio === menu._id) {
          trocaId = troca._id;
        } 
      });

      const request = {
        user: this.user._id,
        cardapio: menu._id,
        pratoPrincipal: menu.chosed ? menu.chosed : menu.pratoPrincipal,
        _id: trocaId
      };

      if(trocaId) {
        return putChange(request)
      } else {
        return postChange(request)
      }
    });

    this.submitRequest(promises);
  }
  
  async submitRequest(promises: Array<Promise<any>>) {
    await Promise.all(promises)
    .then(
      res => this.props.snackStore.openSnack('Sucesso au atualizar todos os dias')
    )
    .catch(
      e => this.props.snackStore.openSnack('Ocorreu algum erro: ' + e)
    )
    .finally(() => {
      this.setState({ loading: false });
    });
  }

  submitChoice() {
    this.setState({
      confirmAction: true
    });
  }

  render() {
    return (
      <div className="Home Center-container-Vertical s840">
        <Card className="Home-card">
          <CardContent>
            {
              this.state.menus.length 
              ? <Menus menuData={this.state.menus} handleChange={this.handleMenu} />
              : this.state.loading 
              ? <Loading /> : <h1> Algum erro aconteceu ao buscar os cardapios </h1> 
            }
          </CardContent>

          <CardActions className="button-container">
            <Button 
              variant="contained" 
              color="primary"
              onClick={this.submitChoice}
              ref={this.anchorRef}
              disabled={this.state.loading}
            >
              {this.state.loading ? <CircularProgress size={24} /> : 'Trocar'}
            </Button>

            <Menu
              keepMounted
              anchorEl={this.anchorRef.current}
              open={this.state.confirmAction}
              onClose={this.handleAction}
            >
              <h4 className="Home-confirm-title">Confirmar troca?</h4>
              <MenuItem onClick={this.handleAction}>Sim</MenuItem>
              <MenuItem onClick={this.handleAction}>Não</MenuItem>
            </Menu>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Home
