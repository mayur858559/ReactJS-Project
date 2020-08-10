import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
const App = () => {
  const [name, setName, options] = useState();
  const [fullName, setFullName] = useState();
  const InputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const onsubmit = () => {
    setFullName(name);
    // const options = [
    //   { value: 'chocolate', label: 'Chocolate' },
    //   { value: 'strawberry', label: 'Strawberry' },
    //   { value: 'vanilla', label: 'Vanilla' }
    // ];
    // const MyComponent = () => (
    //   <select options={options} />
    // )
  }
  return (<>
    <div className="main-div">
      <h1>Select a location</h1>
      <input type="text" placeholder="Select a location" onChange={InputEvent} value={name} autoComplete="on" />
      <br />
      <button onClick={onsubmit}>Add & Select </button>
      <br />
      <ul>
        <li>{fullName}</li>
      </ul>
    </div>
  </>
  );
};

export default App;