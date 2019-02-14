import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/events.css';
import Modal from '../widgets/eventmodal.js';
import {Button, Jumbotron} from 'react-bootstrap';
import Calendar from '../widgets/calendar.js';
import {Glyphicon} from 'react-bootstrap';
import pic5 from "../assets/eventpage.jpg";
import EventBox from "../widgets/eventbox"
import superagent from 'superagent';
import Navigation from "../widgets/navigation";
import Footer from "../widgets/footer.js";

class Events extends Component {

    constructor () {
        super();
        this.state = {
          showModal: false,
          imgFiles: [],
          upcomingEvents1: [],
          upcomingEvents2: [],
          pastEvents: [],
          allEventsThisMonth: []
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.imageChanger = this.imageChanger.bind(this);
        this.renderEventBox = this.renderEventBox.bind(this);
    }

    imageChanger() {
        var img_list = [];

    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    renderEventBox(numBoxes, data) {
        console.log('inside events.js data:' + data);
        return <EventBox numBoxes={numBoxes} eventsdata={data}/>
    }

    componentWillMount(){

        superagent.post('/getrecentsix')
        .send()
        .set('Accept', 'application/json')
        .end((err, response) => {
            if(err){
                console.log('error' + err);
            }
            var body = response.body || [0,0,0,0,0,0];
            var upcomingFirst = body.slice(0,3);
            var upcomingSecond = body.slice(3,6);
            this.setState({
                upcomingEvents1: upcomingFirst,
                upcomingEvents2: upcomingSecond,
            }, function(){console.log('getrecentsix' + this.state.upcomingEvents1);});
        });

        superagent.post('/getpastthree')
        .send()
        .set('Accept', 'application/json')
        .end((err, response) => {
            var pastEvents = response.body;
            this.setState({
                pastEvents: pastEvents
            }, function(){console.log('getpastthree' + this.state.pastEvents);});
        });
    }

    render() {
        var settings = {
              arrows: false,
              infinite: true,
              speed: 1500,
              slidesToShow: 1,
              slidesToScroll: 1,
              variablewidth:false,

            };
        return (
          <div className="App">
            <Navigation />
            <div className="HeaderPic">
                    <div className="cover"></div>
            </div>
            <div id='eventtitle' >
                <b><h1 id='eventstitleheader'>Events</h1></b>
            </div>

            <div className="upcomingEvents">
                <div className="eventRow">
                    {this.renderEventBox(3, this.state.upcomingEvents1)}
                </div>
                <div className="eventRow">
                    {this.renderEventBox(3, this.state.upcomingEvents2)}
                </div>
            </div>

            <Calendar events={this.state.allEventsThisMonth}/>

            <div className="pastEvents">
                <h1>Past Events</h1>
                <div className="eventRow">
                    {this.renderEventBox(3, this.state.pastEvents)}
                </div>
            </div>


            <div className="createEvent">
                <a onClick={this.handleOpenModal}><div id="button">Create Event</div></a>
                <Modal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} />
            </div>
              <Footer/>
          </div>
        )
    }
}

export default Events;
