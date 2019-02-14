import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import Modal from '../widgets/eventmodal.js';
import {Button, Jumbotron} from 'react-bootstrap';
import $ from 'jquery';
import 'fullcalendar';

import 'moment/min/moment.min.js';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import 'fullcalendar/dist/gcal.js';

class Calendar extends Component {

    constructor () {
        super();
    }
    componentDidMount() {
        $('#calendar').fullCalendar({
            height: 550,
            googleCalendarApiKey: 'AIzaSyDlAzoAWeGvdsp72F1aul1K_tB7bXXAySI',
            events: {
                googleCalendarId: 'kseaatcal@gmail.com'
            },
            eventClick: (calEvent, jsEvent, view)=>{
                console.log('Event: %j', calEvent);
                console.log('Coordinates: %j', jsEvent);
                console.log('View: %j', view);
                return false;
            }
        });
    }

    render() {
        var calendarWrapperCss = {
            padding:"100px"
        }
        return (
          <div className="App">
            <div style={{calendarWrapperCss}}>
                <div id="calendar" style={{calendarWrapperCss}}></div>
            </div>
          </div>
        );
    }
}

export default Calendar;
