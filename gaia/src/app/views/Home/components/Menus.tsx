import React, { ReactNode } from 'react'

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Cardapio from '../../../shared/interfaces/menu.interface';
import WeekTabs from '../../../shared/components/weekTabs/';

import './Menus.css';
import { Checkbox } from '@material-ui/core';

interface Props {
  menuData: Array<Cardapio>,
  handleChange: any
}
interface State {
  tabIndex: number
}

class Menus extends React.Component<Props, State> {

  days: Array<string>;

  constructor(props: Props) {
    super(props)

    this.state = {
      tabIndex: 0,
    }

    this.days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado',];

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event: React.ChangeEvent<{}>, index: number) {
    this.setState({
      tabIndex: index
    });
  }

  render(): ReactNode {
    const { menuData } = this.props;

    return (
      <div>
        <WeekTabs
          handleTabChange={this.handleTabChange}
          tabIndex={this.state.tabIndex}
        />

        {
          menuData.map(
            (menu: Cardapio, key) => key < 6 &&
              <Card hidden={this.state.tabIndex !== key} key={key} className="paper">
                <CardContent>
                  <List>
                    <ListItem className="Home-Menus-ListItem">
                      <span>Prato Principal</span>
                      <FormControl>
                        <Select
                          value={menu.chosed ? menu.chosed : menu.pratoPrincipal}
                          onChange={this.props.handleChange}
                          inputProps={{
                            name: String(key),
                            className: 'Home-Menus-Chose'
                          }}
                        >
                          <MenuItem value={menu.pratoPrincipal}>{menu.pratoPrincipal}</MenuItem>
                          <MenuItem value={menu.opcao1}>{menu.opcao1}</MenuItem>
                          <MenuItem value={menu.opcao2}>{menu.opcao2}</MenuItem>
                        </Select>
                      </FormControl>
                    </ListItem>
                    <ListItem className="Home-Menus-ListItem">
                      <span>Guarnição 1</span>
                      <span>{menu.guarnicao1}</span>
                    </ListItem>
                    <ListItem className="Home-Menus-ListItem">
                      <span>Guarnição 2</span>
                      <span>{menu.guarnicao2}</span>
                    </ListItem>
                    <ListItem className="Home-Menus-ListItem">
                      <span>Salada</span>
                      <span>{menu.salada}</span>
                    </ListItem>
                    <ListItem className="Home-Menus-ListItem">
                      <span>Sobremesa</span>
                      <span>{menu.sobremesa}</span>
                    </ListItem>
                    <ListItem className="Home-Menus-ListItem">
                      <span>Não vou almoçar aqui</span>
                      <span>
                        <Checkbox 
                          checked={menu.chosed === 'desistiu'}
                          onClick={
                            () => this.props.handleChange({target:{ name: String(key), value: 'desistiu' }})
                          }
                        />
                      </span>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
          )
        }
      </div>
    );
  }
}

export default Menus
