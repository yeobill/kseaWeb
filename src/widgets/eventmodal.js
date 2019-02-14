import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/eventmodal.css';

import ReactModal from 'react-modal';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import FormData from 'form-data';
import superagent from 'superagent';
import ImageUploader from './imageuploader.js';
import {Form, FormGroup, Col, ControlLabel, FormControl, Button,Row} from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.min.css';
import moment from 'moment';

export default class Eventmodal extends Component {

    constructor (props) {
        super();
        this.state = {
          processing: false,
          imgFiles: null,
          startDate: null,
          title: "",
          committee: "",
          fee: 0,
          place: "",
          venmo: "",

          description:""
        };
        //this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.storeValues = this.storeValues.bind(this);
    }

    handleSubmit = (e) => {
      e.preventDefault();
      var filename;
      if(this.state.imgFiles){
          this.setState({
            processing: true
          });

          var data = {
            data_uri: this.state.imgFiles.data_uri,
            filename: this.state.imgFiles.filename,
            filetype: this.state.imgFiles.filetype
          }

          superagent.post('/uploadtos3')
          .send(data)
          .set('Accept', 'application/json')
          .end((err, result) => {
            filename = result;
            if(err){
              alert(err + 'error submitting data to the server. Check with Matt Choi');
            } else {
              this.setState({
                processing: false,
                uploaded_uri: data.uri
              });
            }
          });
      }


      var datatosaveinmongo = {
        title: this.state.title,
        committee: this.state.committee,
        fee: this.state.fee,
        place: this.state.place,
        date: this.state.startDate,
        description: this.state.description,
        venmo: this.state.venmo,
        imageURL: filename
      }

      superagent.post('/createevent')

      .send(datatosaveinmongo)
      .set('Accept', 'application/json')
      .end((err, result) => {
        if(err){
            alert(err);
        }
        console.log('successful: ' + result);
      });


      this.props.handleCloseModal()
   }

  imageUploaded = (file) => {
      this.setState({
        imgFiles: file
      });
  }
/*
    onDrop(files) {
        var file = files[0];
        superagent.post('/uploadtos3')
        .attach('attchedfile', files[0])
        .end((err, res) => {
        if (err) console.log(err);
        alert('File uploaded!');
    })}*/
    handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  storeValues(e){
    var stateID = e.target.id;
    var value = e.target.value;

    if (stateID === "title") {
        this.setState({title: value});
    } else if (stateID === "committee") {
        this.setState({committee: value});
    } else if (stateID === "fee") {
        this.setState({fee: value});
    } else if (stateID === "place") {
        this.setState({place: value});
    } else if (stateID === "description") {
        this.setState({description: value});
    } else {

    }
  }

    render() {
        const {date, format, mode, inputFormat} = this.state;
        return (
          <div>
            <ReactModal
               isOpen={this.props.showModal}
               contentLabel="Minimal Modal Example"
               shouldCloseOnOverlayClick={true}
               style={{ overlay:{
                        position                   : 'absolute',
                        top                        : '150px',
                        left                       : '150px',
                        right                      : '150px',
                        bottom                     : '150px'
                    }, content : {
                    position                   : 'absolute',
                    top                        : '10px',
                    left                       : '10px',
                    right                      : '10px',
                    bottom                     : '10px',
                    border                     : '1px solid #ccc',
                    background                 : '#fff',
                    overflow                   : 'auto',
                    WebkitOverflowScrolling    : 'touch',
                    borderRadius               : '4px',
                    outline                    : 'none',
                    padding                    : '20px',
                    color                      : 'black'
                }}}
            >

              <form id="formHole" onSubmit={this.handleSubmit} encType="multipart/form-data">
                <ImageUploader imageUploaded={this.imageUploaded}/>
                <FormGroup controlId="formHorizontalEmail">
                    <Row>

                  <Col componentClass={ControlLabel} sm={1}>
                    Title
                  </Col>
                  <Col sm={5} inline>
                    <FormControl id="title" type="text" placeholder="Title" onChange={this.storeValues}/>
                  </Col>
                  <Col componentClass={ControlLabel} sm={1}>
                    Committee
                  </Col>
                  <Col sm={5} inline>
                    <FormControl id="committee" type="text" placeholder="Committee" onChange={this.storeValues}/>
                  </Col>
                  </Row>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                    <Row>
                      <Col componentClass={ControlLabel} sm={1}>
                        Fee
                      </Col>
                      <Col sm={2} inline>
                        <FormControl id="fee" type="number" placeholder="Fee" onChange={this.storeValues}/>
                      </Col>
                      <Col componentClass={ControlLabel} sm={1}>
                        Place
                      </Col>
                      <Col sm={4} inline>
                        <FormControl id="place" type="text" placeholder="Place" onChange={this.storeValues}/>
                      </Col>
                      <Col componentClass={ControlLabel} sm={1}>
                        Venmo
                      </Col>
                      <Col sm={3} inline>
                        <FormControl id="venmo" type="text" placeholder="VenmoID" onChange={this.storeValues}/>
                      </Col>
                  </Row>
                  <Row>
                  <Col componentClass={ControlLabel} sm={2}>
                    Date
                  </Col>
                  <Col sm={10} inline>

                      <DatePicker
                                width = "100%"
                                placeholderText = "Click to select a date"
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                dateFormat="LLL"
                            className="DatePicker"/>
                   </Col>
                   </Row>
                   <Row>
                       <Col componentClass={ControlLabel} sm={1}>
                        Description
                      </Col>
                       <Col componentClass={ControlLabel} sm={12}>
                        <FormControl id="description" componentClass="textarea" placeholder="Description" height="100px" onChange={this.storeValues}/>
                      </Col>
                  </Row>
                  <Button type="submit" className="submitbutton">Submit</Button>
                  <button onClick={this.props.handleCloseModal}>Close Modal</button>

                </FormGroup>

              </form>
            </ReactModal>
          </div>
        );
    }
}
