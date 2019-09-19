import React, { ReactNode } from 'react'

import WeekTabs from '../../../shared/components/weekTabs/';
import Menu from './Menu';

interface Props {
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
        <WeekTabs
          handleTabChange={this.handleTabChange}
          tabIndex={this.state.tabIndex}
        />

        {
          menus.map(
            (menu, key) => key < 6 &&
              <Menu
                hidden={this.state.tabIndex !== key}
                menu={menu}
                key={key}
                inputChange={this.inputChange}
              />
          )
        }
      </>
    )
  }
}

export default Menus
