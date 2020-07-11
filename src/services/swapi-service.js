export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _apiPeople = '/people/';
  _apiPlanets = '/planets/';
  _apiStarships = '/starships/';

  async getResouse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    const bodyRes = res.json();
    return bodyRes;
  }

  async getAllPeople() {
    const res = await this.getResouse(this._apiPeople);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResouse(`${this._apiPeople}${id}`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResouse(this._apiPlanets);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResouse(`${this._apiPlanets}${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResouse(this._apiStarships);
    return res.result.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResouse(`${this._apiStarships}${id}`);
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthday: person.birthday,
      eyeColor: person.eyeColor
    }
  };
}
