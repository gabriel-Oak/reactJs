import React from 'react'

import { observer, inject } from 'mobx-react';
import AppStore from '../../App.store';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import { setTitle } from '../../utils/titleService';
import { getMenus } from '../../api/cardapio-service';
import { getTrocasUser, postChange, putChange } from '../../api/troca-service';
import Cardapio from '../../shared/interfaces/menu.interface';
import Menus from './components/Menus';
import Loading from './components/Loading';
import { getUser } from '../../utils/auth';

import './Home.css';
import User from '../../shared/interfaces/user.interface';

interface Props {
  appStore: AppStore
}
interface State {
  menus: Array<Cardapio>,
  confirmAction: boolean,
  loading: boolean
}
@inject('appStore')
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

  verifyTrocas(trocas: Array<any>) {
    
    const promises = this.state.menus.map(menu => {
      let trocaId;
      trocas.forEach((troca: any) => {
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
        .then()
        .catch()
      } else {
        return postChange(request)
        .then()
        .catch()
      }
    });

    this.submitRequest(promises);
  }
  
  async submitRequest(promises: Array<Promise<any>>) {
    await Promise.all(promises)
    .then()
    .catch()
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
          <CardHeader title="Trocar Prato Principal" />
          <CardContent>
            {
              this.state.menus.length 
              ? <Menus menuData={this.state.menus} handleChange={this.handleMenu} />
              : this.state.loading && <Loading />
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
