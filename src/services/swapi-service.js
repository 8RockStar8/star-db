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
    return res;
  }

  getPerson(id) {
    return this.getResouse(`${this._apiPeople}${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResouse(this._apiPlanets);
    return res;
  }

  getPlanet(id) {
    return this.getResouse(`${this._apiPlanets}${id}`);
  }

  async getAllStarships() {
    const res = await this.getResouse(this._apiStarships);
    return res;
  }

  getStarship(id) {
    return this.getResouse(`${this._apiStarships}${id}`);
  }
}
