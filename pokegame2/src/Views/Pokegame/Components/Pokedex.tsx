import React from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends React.Component {

    props: any;

    state = {
        totalXP: 0
    }
    

    render() {
        const { pokemons } = this.props;
        const totalXP = pokemons
            .map((p: any) => p.base_experience )
            .reduce((a: number, b: number) => a + b );
        
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <h2>Total XP: { totalXP }</h2>
                <div className="Pokedex-container">
                    { 
                        this.props.pokemons.map( 
                            (pokemon: any, key: number) => <Pokecard pokemon={pokemon} key={key}/>
                        ) 
                    }
                </div>
            </div>
        );
    }
}

export default Pokedex;