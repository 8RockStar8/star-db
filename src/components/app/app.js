import React, { Component } from 'react';

import Header from './../header';
import RandomPlanet from './../random-planet';
import ErrorButton from './../error-button';
import ErrorIndicator from './../error-indicator';
import PeoplePage from '../people-page';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({
      hasError: true
    });
  }

  toggleRandomPlanet = _ => {
    this.setState({
      showRandomPlanet: !this.state.showRandomPlanet
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const { showRandomPlanet } = this.state;
    const planet = showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <Header />
        { planet }
        <button className='toggle-btn btn btn-warning btn-lg' onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>
        <ErrorButton />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
