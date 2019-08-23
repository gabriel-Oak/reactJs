import React from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
    props: any;
    state: { totalXp: number, winner: boolean }

    constructor(props: any) {
        super(props);
        const { pokemons, children, handlerXp } = props;

        const xp: number = pokemons
            .map((p: any) => p.base_experience)
            .reduce((a: number, b: number) => a + b);
        handlerXp(xp, children);

        this.state = {
            totalXp: xp,
            winner: false
        }

        this.handlerWinner = this.handlerWinner.bind(this);
    }

    componentDidMount() {
        const { winner, children } = this.props;

        winner(children, this.handlerWinner);
    }



    handlerWinner(state: Boolean) {
        this.setState({
            winner: state
        });
    }


    render() {

        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <h2>Total XP: {this.state.totalXp}</h2>
                {
                    this.state.winner
                        ? <h3 className="Pokedex-winner">Vencedor!</h3>
                        : <h3 className="Pokedex-loser">Perdedor!</h3>
                }
                <div className="Pokedex-container">
                    {
                        this.props.pokemons.map(
                            (pokemon: any, key: number) => <Pokecard pokemon={pokemon} key={key} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Pokedex;