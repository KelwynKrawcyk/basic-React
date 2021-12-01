import React, { createContext } from "react";
import { Component } from "react";
import NoteLists from "./components/NoteLists/NoteLists";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newArrayNotas = [...this.state.notas, newNote];
    const newState = { notas: newArrayNotas };
    this.setState(newState);
  }

  render() {
    return (
      <section className="contents">
        <RegisterForm createNote={this.createNote.bind(this)} />
        <NoteLists notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
