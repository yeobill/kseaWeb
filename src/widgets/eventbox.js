import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../assets/events.css';
import Moment from 'react-moment';

class EventBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
          numBoxes: props.numBoxes || 0

        };
        this.renderBoxWithConfig = this.renderBoxWithConfig.bind(this);
    }

    renderBoxWithConfig(){
        if(this.props.eventsdata) {
            if(this.props.eventsdata.length != 0){
                var boxes = [];
                var whole = 12;
                var data = this.props.eventsdata;
                if(data.length != 0){
                    for(var i=0;i<this.state.numBoxes;i++) {
                        var contents = data[i];
                        if(contents){
                            boxes.push(<Col xs={12} md={whole/this.state.numBoxes}><a>
                                <div id="eachbox" className="ehvrbox">
                                    <div className="ehvrbox-layer_top">
                                        <div className="text">
                                            <div>Hosted By: {contents.committee}</div>
                                            <div>Description: {contents.description}</div>
                                            <div>Place: {contents.place}</div>
                                            <div>Fee: {contents.fee}</div>
                                            <div>Venmo Id: {contents.venmo}</div>
                                        </div>
                                    </div>
                                    <div id="picture"><img src={'/img/'+contents.imageURL} height="100%" width="auto"/></div>
                                    <div id="explanation">
                                        <div id="date"><Moment  format="MMM D YYYY HH:mm" date={contents.date}></Moment></div>
                                        <div id="event">{contents.eventname}</div>
                                    </div>
                                </div></a></Col>);
                        }
                    }
                    return (
                    <Grid>
                      <Row>
                        {boxes}
                      </Row>
                    </Grid>
                    );
                }
            }
        }
    }

    render() {
        return (
          <div>
            {this.renderBoxWithConfig()}
          </div>
        );
    }
}

export default EventBox;

