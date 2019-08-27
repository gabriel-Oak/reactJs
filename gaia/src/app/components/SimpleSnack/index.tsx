import React, { ReactNode } from 'react'

import Snackbar from '@material-ui/core/Snackbar';

import { observer, inject } from 'mobx-react';

interface State { }

@inject('snackStore')
@observer
class Index extends React.Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = {

    }    
    this.closeSnack = this.closeSnack.bind(this);
  }

  closeSnack(event: any, reason: any) {
    if (reason === 'clickaway') {
      return;
    }
    
    this.props.snackStore.closeSnack(false);
  }

  render(): ReactNode {

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.props.snackStore.getState}
        autoHideDuration={6000}
        onClose={this.closeSnack}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span>{this.props.snackStore.getMessage}</span>}
      />
    )
  }
}

export default Index
