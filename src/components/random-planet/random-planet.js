import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className='random-planet jumbotron'>
        <img className='planet-image' src='https://starwars-visualguide.com/assets/img/' alt='planet' />
      </div>
    );
  }
}
