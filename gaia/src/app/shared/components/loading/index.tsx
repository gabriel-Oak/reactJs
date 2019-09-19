import React, { ReactNode } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';

import './Loading.css';

interface Props { }

class Loading extends React.Component<Props> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render(): ReactNode {
    return (
      <div className="Loading-card">
        <CircularProgress className="Loading" size={100} />
      </div>
    )
  }
}

export default Loading
