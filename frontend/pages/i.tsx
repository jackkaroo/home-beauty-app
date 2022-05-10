import React, { useState } from 'react';

const I = () => {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor('blue');
    console.log(color);
  };

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={handleClick}>
        Blue
      </button>
    </>
  );
};

export default I;
