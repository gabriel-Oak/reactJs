import React from 'react';
import './Pokecard.css'

class Pokecard extends React.Component {

    props: any;

    state = { }
    
    render() {
        const { pokemon } = this.props
        return (
            <div className="Pokecard">
                <h3>{pokemon.name}</h3>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id.toString().padStart(3, '0')}.png`} alt={pokemon.name}/>
                <div> Tipo: {pokemon.type} </div>
                <div> EXP: {pokemon.base_experience} </div>
            </div>
        );
    }
}

export default Pokecard;