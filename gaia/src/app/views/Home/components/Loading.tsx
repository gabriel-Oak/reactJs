import React, { ReactNode } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';

import './Loading.css';

interface Props { }

class NotFound extends React.Component<Props> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render(): ReactNode {
    return (
      <div className="Home-loading-card">
        <CircularProgress className="Home-loading" size={100} />
      </div>
    )
  }
}

export default NotFound
