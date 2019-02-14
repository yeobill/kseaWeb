import React, { Component } from 'react';
import {Grid, Row, Col, Glyphicon, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Navigation from '../widgets/navigation';
import '../assets/contact.css';
//import '../assets/button.scss';
import Particles from 'react-particles-js';
import superagent from 'superagent';
import Footer from "../widgets/footer.js";


class Contact extends Component {

    constructor () {
        super();
        this.state = {
          showModal: false,
          imgFiles: [],
          namefield: "",
          emailfield: "",
          contentfield: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
    }

    sendFeedback(e){
        e.preventDefault();
        superagent.post('http://localhost:4000/feedback')
        .send({name:this.state.namefield, email:this.state.emailfield, content:this.state.contentfield})
        .end((err, result) => {
            if(err){
                alert(err);
            }
            this.setState({namefield:"", emailfield:"", contentfield:""});
            alert('Thanks for your question! We will get back to you shortly');
            window.location.reload();
        });
    }


    handleChange(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.setState({[field]: value});
    }

    render() {
        const particleParams = {
            "particles": {
            "number": {
              "value": 5,
              "density": {
                "enable": true,
                "value_area": 315
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 0.5,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 0.1,
                "opacity_min": 0.2,
                "sync": false
              }
            },
            "size": {
              "value": 4,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": true,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
    "retina_detect": true
    }

        return (
          <div id="background">
            <Particles params={particleParams}/>
            <div className="parent">
            <Navigation css='main'/>
              <div className="headerformbox">
                <div id="formtitle">
                  <h3>Contact Us</h3>
                  <h4>For Anything. Literally.</h4>
                </div>
                <form>
                  <FormGroup>
                    <Col className="mobiletop20" xs={12} sm={12} md={12} inline>
                      <FormControl name="namefield" type="text" placeholder="Name" onChange={this.handleChange}/>
                    </Col>
                    <Col className="mobiletop20" xs={12} sm={12} md={12} inline>
                      <FormControl name="emailfield" type="email" placeholder="Email" onChange={this.handleChange}/>
                    </Col>
                    <Col className="white" id="content" componentClass={ControlLabel} xs={12} sm={12} md={12}>
                      Content
                    </Col>
                    <Col xs={12} sm={12} md={12} inline>
                      <FormControl name="contentfield" componentClass="textarea" placeholder="Content" onChange={this.handleChange}/>
                    </Col>
                    <Col id="submit1" xs={12} sm={12} md={12} >
                        <button id="button1" onClick={this.sendFeedback}>Submit</button>
                    </Col>
                  </FormGroup>

                </form>
              </div>
              </div>
              <Footer css=''/>
           </div>
        )
    }
}

export default Contact;
