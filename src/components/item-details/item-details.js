import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';

import './item-details.css';

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          image: getImageUrl(item)
        });
      });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span>Select a person from a list</span>
    }

    const { id, name, gender, birthDay, eyeColor } = item;

    return (
      <div className='item-detail card'>
        <img className='item-image' src={image} alt='character' />
        <div className='card-body'>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Gender</span>
              <span>{gender}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Birth Year</span>
              <span>{birthDay}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'> Eye color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
