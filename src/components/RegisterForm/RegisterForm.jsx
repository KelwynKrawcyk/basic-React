import React, { Component } from "react";
import "./Style.css";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.contents = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeContents(event) {
    event.stopPropagation();
    this.contents = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.contents);
  }

  render() {
    return (
      <form className="register-form" onSubmit={this._createNote.bind(this)}>
        <input
          className="register-form_input"
          type="text"
          placeholder="Title"
          onChange={this._handleChangeTitle.bind(this)}
        />

        <textarea
          className="register-form_input"
          rows={10}
          placeholder="Write your note"
          onChange={this._handleChangeContents.bind(this)}
        />

        <button
          className="register-form_input register-form_submit"
          type="Submit"
        >
          Create note
        </button>
      </form>
    );
  }
}
