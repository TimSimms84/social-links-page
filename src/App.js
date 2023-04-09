import React from 'react';
import './App.css';
import logo from './holberton-logo.png';


const people = [
  {
    name: 'Tim Simms',
    github: 'https://github.com/TimSimms84',
    linkedin: 'https://www.linkedin.com/in/timcsimms/',
  },
  {
    name: 'Trenton Sims',
    github: 'https://github.com/trentonsims',
    linkedin: 'https://www.linkedin.com/in/tsims115/',
  },
  {
    name: 'Blake Stewart',
    github: 'https://github.com/Acochisse',
    linkedin: 'https://www.linkedin.com/in/leestewart909/',
  },
];

function App() {
  return (
    <>
      <div className="App">
        <h1>FIND US HERE</h1>
        <div className="links-container">
          {people.map((person, index) => (
            <div key={index} className="person">
              <h2>{person.name}</h2>
              <a href={person.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          ))}
        </div>
      </div>
      <img src={logo} alt="Holberton School Logo" className="holberton-logo" />
    </>
  );
}

export default App;
