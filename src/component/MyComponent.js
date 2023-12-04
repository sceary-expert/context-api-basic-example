import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const MyComponent = () => {
  const { myState, updateState } = useContext(MyContext);

  const handleClick = () => {
    updateState('New Value');
  };

  return (
    <div>
      <p>My State: {myState}</p>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
};

export default MyComponent;
