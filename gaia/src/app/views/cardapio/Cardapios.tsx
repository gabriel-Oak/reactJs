import React from 'react';

import { observer, inject } from 'mobx-react';
import AppStore from '../../App.store';

import Card from '@material-ui/core/Card';


import Cardapio from '../../shared/interfaces/menu.interface';
import Loading from '../../shared/components/loading/';
import Menus from './components/Menus';

import { getMenus } from '../../core/api/cardapio-service';
import { setTitle } from '../../utils/titleService';
import SnackStore from '../../components/SimpleSnack/snack.stores';

interface Props { 
  appStore: AppStore;
  snackStore: SnackStore;
}
interface State {
  loading: boolean;
  menus: Array<Cardapio>;
}

@inject('appStore', 'snackStore')
@observer
class Cardapios extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    const title = 'Alterar cardapios';

    this.state = {
      loading: true,
      menus: []
    }

    this.getMenus();
    setTitle(title);
    this.props.appStore.setTitle(title);
    this.inputChange = this.inputChange.bind(this);
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
        this.setState({ loading: false });
      })
  }

  sortMenus(menus: Array<Cardapio>): Array<Cardapio> {
    return menus.sort((a, b) => {
      const dateA = new Date(a.data).getDay();
      const dateB = new Date(b.data).getDay();
      if (dateA > dateB) return 1;
      else if (dateA < dateB) return -1;
      else return 0;
    });
  }

  inputChange(menus: Array<Cardapio>): void {
    this.setState({
      menus: menus
    });
  }

  render() {

    return (
      <div className="Cardapio Center-container-Vertical s840">
        <Card>
          {
            this.state.menus.length
              ? <Menus 
                  menus={this.state.menus} 
                  inputChange={this.inputChange}
                  snackStore={this.props.snackStore}
                />
              : this.state.loading
                ? <Loading /> : <h1>Erro ao buscar cardapios :/</h1>
          }
        </Card>
      </div>
    );
  }
}

export default Cardapios;