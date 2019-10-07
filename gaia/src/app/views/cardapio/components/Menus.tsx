import React, { ReactNode } from 'react'

import CardContent from '@material-ui/core/CardContent';

import WeekTabs from '../../../shared/components/weekTabs/';
import MenuItens from './Menu';
import SnackStore from '../../../components/SimpleSnack/snack.stores';

interface Props {
  snackStore: SnackStore;
  menus: Array<any>;
  inputChange: any;
}

interface State {
  tabIndex: number;
}

class Menus extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      tabIndex: 0
    }

    this.inputChange = this.inputChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event: React.ChangeEvent<{}>, index: number) {
    this.setState({
      tabIndex: index
    });
  }

  inputChange(e: any): void {
    const menus = this.props.menus;
    menus[this.state.tabIndex][e.target.name] = e.target.value;
    this.props.inputChange(menus);
  }

  render(): ReactNode {
    const { menus } = this.props;

    return (
      <>
        <CardContent>
          <WeekTabs
            handleTabChange={this.handleTabChange}
            tabIndex={this.state.tabIndex}
          />
        </CardContent>
        {
          menus.map(
            (menu, key) => key < 6 &&
              <MenuItens
                hidden={this.state.tabIndex !== key}
                menu={menu}
                day={key+1}
                key={key}
                inputChange={this.inputChange}
                snackStore={this.props.snackStore}
              />
          )
        }
      </>
    )
  }
}

export default Menus
