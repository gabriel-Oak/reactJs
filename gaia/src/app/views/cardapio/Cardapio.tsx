import React from 'react';

interface Props {}
interface State {}

class Cardapio extends React.Component<Props, State> {
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <div className="Cardapio">
                hello
            </div>
        );
    }
}

export default Cardapio;