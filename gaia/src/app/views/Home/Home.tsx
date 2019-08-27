import React from 'react'

import { observer, inject } from 'mobx-react';
import AppStore from '../../App.store';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { setTitle } from '../../utils/titleService';
import { getMenus } from '../../api/cardapio-service';
import Menu from '../../shared/interfaces/menu.interface';
import Menus from './components/Menus';

interface Props {
  appStore: AppStore
}
interface State {
  menus: Array<Menu>
}
@inject('appStore')
@observer
class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      menus: []
    }

    this.props.appStore.setTitle('Home');
    setTitle('Home');

    this.getMenus();

    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(e: React.ChangeEvent<{ target: {name: string; value: number}, name: number}>){
    console.log(e);
    this.setState({
      ...this.state,
      menus: [...this.state.menus, this.state.menus[e.target.name]],
    });
  }

  getMenus() {
    getMenus()
      .then(res => {
        console.log(res.data);
        this.setState({
          menus: res.data
        });
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    return (
      <div className="Home Center-container-Vertical s840">
        <Card className="Home-card">
          <CardHeader title="Trocar Prato Principal" />
          <CardContent>
            {
              this.state.menus.length
              && <Menus menuData={this.state.menus} handleChange={this.handleMenu}/>
            }
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Home
