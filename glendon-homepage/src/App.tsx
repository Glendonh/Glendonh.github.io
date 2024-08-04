import React from "react";
import logo from "./logo.svg";
import Header from "./Header";
import Divider from "./Divider";
import Section from "./Section";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Divider title="Technology Used" />
      <Section>
        <Card title="React" image="yes" />
        <Card title="React Native" />
      </Section>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
