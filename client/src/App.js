import React from 'react';
import{useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      {isLogged}
      <h3>Valuable information</h3>
    </div>
  )
}

export default App;