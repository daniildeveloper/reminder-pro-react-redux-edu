import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import {  } from "./";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',

    }
  }

  addReminder() {
    console.log('this.state', this.state); 
  }

  render() {
    return (
      <div className="App container">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group">
            <input onChange={event => this.setState({ text: event.target.value })} type="text" className="form-control" placeholder="I have to ..."/>
          </div>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default App;
