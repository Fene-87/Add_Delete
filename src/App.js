import React from 'react';
import './App.css';

function App() {

  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    setThingsArray(prevState => {
      return [...prevState, `Thing ${prevState.length + 1}`]
    });
  }

  

  function removeItem() {
    const removeElement = thingsArray[thingsArray.length - 1];
    setThingsArray(prevState => {
      return prevState.filter(thing => thing !== removeElement)
    })
  }

  const thingsElements = thingsArray.map(thing => {
    return <p key = {thing}>{thing}</p>
  })

  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
      {thingsElements}
      
    </div>
  );
}

export default App;
