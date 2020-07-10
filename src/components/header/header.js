import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className='header d-flex'>
      <h3>
        <a href='/star'>
          Star Db
        </a>
      </h3>
      <ul className='d-flex'>
        <li>
          <a href="/star">People</a>
        </li>
        <li>
          <a href="/star">Planets</a>
        </li>
        <li>
          <a href="/star">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
