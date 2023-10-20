import {Component} from "react";
import './App.css';

function WhoAmI ({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="john" surname="Smith" link="fb.com" />
      <WhoAmI name="Dart" surname="Wader" link="starDeath.com" />
    </div>
  );
}
