import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class NotFound extends React.Component {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <h1>Not found</h1>
        )
    }
}

export default NotFound
