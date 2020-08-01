import React from 'react';
import ItemList from './../item-list';
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from './../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>;
 
const renderModelAndName = ({ model, name }) => <span>{name} ----- ( {model} )</span>

const mapPersonToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = compose(
  withSwapiService(mapPersonToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}
