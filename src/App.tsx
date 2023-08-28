import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button/Button";

function App() {

  let number = 3;

  return (
    <div className="App">
      <div>{number}</div>
      <Button name={'inc'}/>
      <Button name={'reset'}/>



      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
