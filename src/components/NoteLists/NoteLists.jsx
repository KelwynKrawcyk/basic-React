import React, { Component } from "react";
import CardNote from "../CardNote";
import "./Style.css";

export default class NoteLists extends Component {
  render() {
    return (
      <ul className="note-lists">
        {this.props.notas.map((nota, index) => (
          <li className="note-lists_item" key={index}>
            <CardNote title={nota.title} text={nota.text} />
          </li>
        ))}
      </ul>
    );
  }
}
