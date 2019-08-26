import React from 'react'

interface Props {}
interface State {}

class Home extends React.Component {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
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
