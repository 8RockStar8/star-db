import React, { Component } from 'react';

import Header from './../header';
import RandomPlanet from './../random-planet';
import Row from './../row';
import ErrorButton from './../error-button';
import ErrorIndicator from './../error-indicator';
import PeoplePage from '../people-page';
import ItemList from './../item-list';
import ItemDetails from './../item-details';

import SwapiService from './../../services/swapi-service';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

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
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );

    const starshipDetails = (
      <ItemDetails 
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <div>
        <Header />
        {/* { planet }
        <button className='toggle-btn btn btn-warning btn-lg' onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>
        <ErrorButton /> */}
        {/* <PeoplePage /> */}
        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
