import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders } from './actions';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder () {
    console.log('this.state.dueDate', this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder (id) {
    this.props.deleteReminder(id);
  }

  /**
   * Render all reminders submiited by users
   */
  renderReminders () {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>
                    {reminder.text}
                  </div>
                  <div>
                    <em>{ moment(new Date(reminder.dueDate)).fromNow() }</em>
                  </div>
                </div>
                <div
                  onClick={() => { this.deleteReminder(reminder.id) }}
                  className="delete-button list-item">
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render () {
    return (
      <div className="App container">
        <div className="title">Reminder Pro</div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input onChange={event => this.setState({ text: event.target.value })} type="text" className="form-control" placeholder="I have to ..." />

            <input
              className="form-control"
              onChange={event => this.setState({ dueDate: event.target.value })}
              type="datetime-local" name="" id="" />
          </div>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
        
        <div 
        onClick={() => this.props.clearReminders()}
        className="btn btn-danger">Clear reminders</div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  console.log('state', state);
  return {
    reminders: state,
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
