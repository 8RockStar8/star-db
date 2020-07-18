import React from 'react';

const Row = ({left, right}) => {
  return (
    <div className='row mb2 page'>
      <div className='col-md-6'>
        {left}
      </div>
      <div className='col-md-6'>
        {right}
      </div>
    </div>
  );
};

export default Row;
