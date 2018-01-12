import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from './actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',

    }
  }

  addReminder () {
    // console.log('this', this);
    this.props.addReminder(this.state.text);
  }

  deleteReminder (id) {
    console.log('deleting in application', id);
    console.log('this.props', this.props);    
  }

  /**
   * Render all reminders submiited by users
   */
  renderReminders() {
    const {reminders} = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div
                 onClick={() => {this.deleteReminder(reminder.id)}}
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    reminders: state,
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
