import React, { Component } from 'react';

import Header from './../header';
import RandomPlanet from './../random-planet';
import ErrorBoundry from './../error-boundry';

import ItemDetails from './../item-details';
import SwapiService from './../../services/swapi-service';

import { SwapiServiceProvider } from './../swapi-service-context';

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
        <SwapiServiceProvider value={this.swapiService}>
          <div className='app-center'>
            <Header />

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />
              
            <PersonList />

            <StarshipList />

            <PlanetList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
