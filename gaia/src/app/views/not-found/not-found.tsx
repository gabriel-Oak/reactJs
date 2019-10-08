import React, { ReactNode } from 'react'
import { setTitle } from '../../utils/titleService'
import AppStore from '../../App.store';
import { inject, observer } from 'mobx-react';
import { Card, CardContent, CardHeader, Button } from '@material-ui/core';

import './not-found.css'
interface Props {
  appStore: AppStore
}

@inject('appStore')
@observer
class NotFound extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
    const title = 'Não encontrado';

    this.state = {

    }

    setTitle(title);
    this.props.appStore.setTitle(title);
  }

  render(): ReactNode {
    return (
      <div className="NotFound Center-container s600">
        <Card>
          <CardHeader title="Não encontrado" />
          <CardContent>
            <h1 className="NotFound-banner">404</h1>
            <div className="NotFound-center-button">
              <Button 
                variant="contained" 
                onClick={() => {
                  window.location.href = process.env.PUBLIC_URL + '/home'
                }}>
                Voltar A Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default NotFound
