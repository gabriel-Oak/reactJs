import React from 'react'

import { observer, inject } from 'mobx-react';
import AppStore from '../../App.store';

import { setTitle } from '../../utils/titleService';

interface Props {
    appStore: AppStore
}
interface State {}
@inject('appStore')
@observer
class Home extends React.Component<Props> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }

        this.props.appStore.setTitle('Home');
        setTitle('Home');
    }

    render() {
        return (
            <div className="Home">
                <h1>Home Component</h1>
            </div>
        )
    }
}

export default Home
