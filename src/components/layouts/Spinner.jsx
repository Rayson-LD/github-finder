import React from 'react';
import spinner from './assets/spin.gif'

function Spinner() {
  return <div>
      <img src={spinner} className='width-100 mx-auto text-center'/>
  </div>;
}

export default Spinner;
