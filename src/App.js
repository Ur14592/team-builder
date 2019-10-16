import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from "./Form";

function App() {

const [teammates,setTeammates] = useState([
  {
    name: "Charlie Kelly",
    email: "CharlieK@gmail.com",
    role: "Janitor"
  }
  ,
  {
    name: "Dennis Reynolds",
    email: "DennisR@gmail.com",
    role: "Co-Owner of Paddy's Pub"
  }
  ,
  {
    name: "Dee Reynolds",
    email: "DeeR@gmail.com",
    role: "Salesman"
  }
  ,
  {
    name: "Mac McDonald",
    email: "Mac@gmail.com",
    role: "Co-Owner/Bouncer of Paddy's Pub"
  }
  ,
  {
    name: "Frank Reynolds",
    email: "FrankR@gmail.com",
    role: "Co-Owner of Paddy's Pub"
  }
]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
