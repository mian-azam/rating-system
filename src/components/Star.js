import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star({ filled, onClick })  {
  return (
    <div onClick={onClick}>
      <FaStar color={filled ? 'rgb(214, 214, 75)' : 'gray'} />
    </div>
  );
};

export default Star;
