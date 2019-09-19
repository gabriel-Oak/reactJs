import React, { ReactNode } from 'react'

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

interface Props {
  handleTabChange: any,
  tabIndex: number
}

interface State { }

class WeekTabs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render(): ReactNode {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado',];

    return (
      <>
        <Tabs
          value={this.props.tabIndex}
          onChange={this.props.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {
            days.map(
              (day, key) => key > 0 && key < 6
                && <Tab label={day} key={key} />
            )
          }
        </Tabs>
      </>
    )
  }
}

export default WeekTabs
