import React, { Component } from 'react';
import Pokedex from './Components/Pokedex';
import './Pokegame.css';

class Pokegame extends Component {

    constructor(props: any) {
        super(props);
        this.state = {}
        this.handlerXp = this.handlerXp.bind(this);
        this.winner = this.winner.bind(this);
    }

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

    xps = {
        '0': 0,
        '1': 0
    }

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

    winner(children: number, callback: Function) {
        children === 0 ?
            callback(this.xps['0'] > this.xps['1']) :
            callback(this.xps['0'] < this.xps['1']);
    }

    handlerXp(total: any, children: 0 | 1) {
        this.xps[children] = total;
    }

    render() {
        return (
            <div className="Pokegame">
                <div className="Pokegame-h1">
                    <h1>Pokegame</h1>
                </div>

                <div className="Pokegame-container">
                    <Pokedex
                        pokemons={this.random(4)}
                        children={0}
                        winner={this.winner}
                        handlerXp={this.handlerXp}
                    />
                    <Pokedex
                        pokemons={this.mock}
                        children={1}
                        winner={this.winner}
                        handlerXp={this.handlerXp}
                    />
                </div>

            </div>
        );
    }
}

export default Pokegame;