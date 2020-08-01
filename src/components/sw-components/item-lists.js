import React from 'react';
import ItemList from './../item-list';
import { withData, withSwapiService } from './../hoc-helpers';


const withChildFunction = (fn) => (Wrapped) => {
  return props => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

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

const PersonList = withSwapiService(mapPersonToProps)(
  withData(
    withChildFunction(renderName)(ItemList)
  )
);

const PlanetList = withSwapiService(mapPlanetToProps)(
  withData(
    withChildFunction(renderName)(ItemList)
  )
);

const StarshipList = withSwapiService(mapStarshipToProps)(
  withData(
    withChildFunction(renderModelAndName)(ItemList)
  )
);

export {
  PersonList,
  PlanetList,
  StarshipList
}
