import React from 'react';
import SwapiService from '../../services/swapi-service';
import { withData } from './../hoc-helpers';

import './item-list.css';


const Itemlist = (props) => {
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

const { getAllPeople } = new SwapiService();

export default withData(Itemlist, getAllPeople);
