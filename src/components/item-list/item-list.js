import React from 'react';
import PropTypes from 'prop-types';
import SwapiService from './../../services/swapi-service';
import { withData } from './../hoc-helpers';

import './item-list.css';

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className='list-group-item' key={id} onClick={_ => onItemSelected(id)}>
        {label}
      </li>
    );
  })

  return (
    <ul className='item-list list-group'>
      {items}
    </ul>
  );
}

ItemList.defaultProps = {
  onItemSelected: _ => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
