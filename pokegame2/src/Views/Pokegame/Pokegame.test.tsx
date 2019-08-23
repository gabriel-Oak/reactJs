import React from 'react';
import ReactDOM from 'react-dom';
import Pokegame from './Pokegame';

const div = document.createElement('div');

beforeEach(() => {
    ReactDOM.render(<Pokegame />, div);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    ReactDOM.render(<Pokegame />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Verifica se havera apenas 1 ganhador', () => {

    const pokedexes = div.querySelectorAll('.Pokedex > h3');
    expect(pokedexes[0].innerHTML).not.toEqual(pokedexes[1].innerHTML);
    ReactDOM.unmountComponentAtNode(div);

});