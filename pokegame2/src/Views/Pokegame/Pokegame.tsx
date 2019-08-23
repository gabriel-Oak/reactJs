import React, { Component } from 'react';
import Pokedex from './Components/Pokedex';
import './Pokegame.css';

class Pokegame extends Component {
    state = {}

    mock = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]

    random(i: number): any {
        const temp: any = [];

        for (let j = 0; j < i; j++)
            temp.push(
                ...this.mock.splice( 
                    Math.floor( 
                        Math.random() * this.mock.length 
                    ), 
                    1
                )
            );

        return temp;
    }

    winner(children: number) {

    }

    handlerXp(total: any, children: number) {
        const state = 
            children == 0 
            ? {a: total}
            : {b: total}
        this.setState(state);
    }

    render() {
        return (
            <div className="Pokegame">
                <h1>Pokegame</h1>
                <div className="Pokegame-container">
                    <Pokedex 
                        pokemons={this.random(4)} 
                        children={0} 
                        winner={this.winner(0)}
                    />
                    <Pokedex pokemons={this.mock} children={1} />
                </div>
                
            </div>
        );
    }
}

export default Pokegame;