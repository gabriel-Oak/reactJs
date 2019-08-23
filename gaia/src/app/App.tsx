import React, {ReactNode} from 'react';
import { Route } from 'react-router-dom';
import './App.css';

interface Props {}
interface State {}

class App extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {
      
    }
  }

  render(): ReactNode {
    return (
      <div className="Gaia">
        {/* <Route path="/" exact component={Home}/> */}
      </div>
    )
  }
}

export default App
