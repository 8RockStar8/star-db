import React, { Component } from 'react';
import Row from './../row';
import ItemList from './../item-list';
import PersonDetails from './../person-details';
import ErrorBoundry from './../error-boundry';
import ErrorIndicator from './../error-indicator';

import SwapiService from './../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ErrorBoundry>
        <ItemList 
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}
        >
          {(i) => (
            `${i.name} (${i.birthYear})`
          )}
        </ItemList>
      </ErrorBoundry>
    );

    const personalDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return(
      <Row left={itemList} right={personalDetails} />
    );
  }
}
