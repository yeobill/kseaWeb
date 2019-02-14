import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Modal from '../widgets/eventmodal.js';
import {Button, Jumbotron} from 'react-bootstrap';
import $ from 'jquery';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import circular from 'circular-json';
import superagent from 'superagent';
import '../assets/calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
        this.pullCurrentMonthEvent = this.pullCurrentMonthEvent.bind(this);
    }

    pullCurrentMonthEvent(dateinfo) {
        var payload = {};
        payload.dateinfo = dateinfo;
        console.log('dateinfo'+JSON.stringify(payload));
        superagent.post('/geteventsthismonth')
        .send(payload)
        .set('Accept', 'application/json')
        .end((err, response) => {
            console.log('RESPONSE: ', response.body);
            var body = response.body || 0;
            var actualevents = []
            for(var i=0;i<body.length;i++){
                var object = {}
                object.title = body[i].eventname;
                object.start = body[i].date;
                object.end = body[i].date;
                actualevents.push(object);
                console.log(JSON.stringify(object));
            }
            this.setState({
                events: actualevents
            });
        });

    }

    componentWillMount(){
        var dateToSearch = new Date();
        this.pullCurrentMonthEvent(dateToSearch);
    }

    render() {
        const that = this;
        const eventlist = [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2017, 3, 0),
    'end': new Date(2017, 3, 1)
  }
];
        return (
          <div id="calendarwrapper">
            <BigCalendar
                events={that.state.events}
                startAccessor='start'
                endAccessor='end'
                step={60}
                views={['back', 'next'],['month', 'day']}
                onNavigate={(date, view) => {
                    this.pullCurrentMonthEvent(date);
                }}

            />
          </div>
        );
    }
}

export default Calendar;
