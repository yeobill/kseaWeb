import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/about.css';
import '../assets/common.css';
import Animation from "../pages/animation";
import Footer from "../widgets/footer.js";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import $ from 'jquery';

class About extends Component {
  render() {
      $.fn.isOnScreen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();

        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };

      return (

        <div>
            <div class="about">
                <div class='about-container'>
                    <Row>
                        <Col md={6}>
                            <div class="explanation-box">
                                <h2><b>Who We Are</b></h2>
                                <div class='explanation-font-size'>
                                    KSEA at UC Berkeley was established with the goal of developing an international cooperation between the United States and Korea. We provide our members with research and internship opportunities located in both countries, as well as develop leadership and technical skills necessary to succeed in their career paths.
                                </div>
                                <a href="/members"><div class="learnmorebutton"><span className='buttonspan'>Learn More</span></div></a>
                            </div>
                        </Col>
                        <Col md={6} id="majoranimation">
                            <div id = "animationcontainer">
                                <Animation/>
                            </div>
                        </Col>
                    </Row>

                    <Row id="project-and-events">
                        <Col md={6}>
                            <div class="explanation-box">
                                <h2><b>Projects</b></h2>
                                <div class='explanation-font-size'>
                                    Six committees make up KSEA: Professional Development, Public Relations, Finance, Social, Start-up, and Research. Explore what each committee is working on this semester.
                                </div>
                                <a href="/committee"><div class="learnmorebutton"><span className='buttonspan'>Learn More</span></div></a>
                            </div>
                        </Col>
                        <Col md={6} class="explanation-box">
                            <div class="explanation-box">
                                <h2><b>Events</b></h2>
                                <div class='explanation-font-size'>
                                     KSEA holds various socials, meetings, and workshops throughout the year for club bonding, networking, and providing academic and professional resources.
                                </div>
                                <a href="/events"><div class="learnmorebutton" id="eventslearnmorebutton" ><span className='buttonspan'>Learn More</span></div></a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <a id="ocf_logo_style" href="https://www.ocf.berkeley.edu">
                <img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg"
                    alt="Hosted by the OCF"/>
            </a>
            <Footer css='_default'/>
          </div>
          );
  }
}

export default About;
