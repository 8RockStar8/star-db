import React, { Component } from 'react';

import Header from './../header';
import RandomPlanet from './../random-planet';
// import Row from './../row';
import ErrorIndicator from './../error-indicator';
import ItemDetails, { Record } from './../item-details';
import ItemList from './../item-list';

import SwapiService from './../../services/swapi-service';

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
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const { showRandomPlanet } = this.state;
    const planet = showRandomPlanet ? <RandomPlanet /> : null;
    const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='gender' label='Gender' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails 
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
        <Record field='costInCredits' label='Cost' />
      </ItemDetails>
    );

    return (
      <div className='app-center'>
        <Header />
          
        <ItemList
          getData={getAllPeople}
          onItemSelected={() => {}}
        >
          { (name) => <span>{name}</span> }
        </ItemList>

        <ItemList
          getData={getAllPlanets}
          onItemSelected={() => {}}
        >
          { (name) => <span>{name}</span> }
        </ItemList>
        {/* { planet }
        <button className='toggle-btn btn btn-warning btn-lg' onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>
        <ErrorButton /> */}
        {/* <PeoplePage /> */}
        {/* <Row left={personDetails} right={starshipDetails} /> */}
      </div>
    );
  }
}
