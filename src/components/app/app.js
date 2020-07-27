import React, { Component } from 'react';

import Header from './../header';
import ErrorBoundry from './../error-boundry';

import SwapiService from './../../services/swapi-service';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from './../sw-components';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
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
    return (
      <ErrorBoundry>
        <div className='app-center'>
          <Header />

          <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />

          <StarshipDetails itemId={9} />
            
          <PersonList />

          <StarshipList />

          <PlanetList />
        </div>
      </ErrorBoundry>
    );
  }
}
