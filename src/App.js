import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from "./Form";
// import List from "./TeamList";
import data from "./data";
import TeamList from "./TeamList";

function App() {
  const [teammates,setTeammates] = useState(data);
  const addNewMember = list => {
    setTeammates([...teammates, list]);
  }


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
      <h1>Team Member </h1>
      <Form addNewMember={addNewMember}/>
      <TeamList addNewMember={teammates}/>
    </div>
  );
};

export default App;