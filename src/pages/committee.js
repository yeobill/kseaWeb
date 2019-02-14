import React, { Component } from 'react';
import socialpic from '../assets/socialpic.jpg';
import socialclub from '../assets/socialclub.jpg';
import '../assets/App.css';
import '../assets/committee.css';
import {Row, Col, Well, TabContainer, NavItem, Nav, TabPane, TabContent} from 'react-bootstrap';
import Navigation from '../widgets/navigation'
import {Image} from 'react-bootstrap';
import Footer from "../widgets/footer.js";


class Committee extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div id="headpicture"></div>
        <h1 id="headtitle">Projects</h1>

        <div id="committeecontent">
          <h4>
            <a href="#startup">Start-up</a> | <a href='#profdev'>Professional Development</a> | <a href='#finance'>Finance</a>
          </h4>
        </div>

        <div className="committees">
            <div className="committee_box">
                <div className="committee_title" id="startup"><h1>Software Engineering</h1></div>
                <Row>
                    <Col md={6}>
                        <Image className="project-img" src={require("../assets/committee/websiteimage.jpg")} responsive rounded/>
                    </Col>
                    <Col md={6}>
                        <div className="project-content">
                            <p className="boxtitle">KSEA Website</p>
                            <p className="boxdesc">The KSEA website is a platform that connects the club to the Berkeley community and the world. Visitors can learn more about our members, projects, and events. The website also serves as a hub for our members to stay updated with club activities.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Image className="project-img" src={require("../assets/committee/gitworkshop.jpg")} responsive rounded/>
                    </Col>
                    <Col md={6}>
                        <div className="project-content">
                            <p className="boxtitle">Git Workshop</p>
                            <p className="boxdesc">Git is a version control system that helps companies and developers manage the progress of their projects. Github is a website that allows users to upload their repositories and collaborate with others. The workshop teaches the basics of how to set up and use both to prepare for a career in software development.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="committee_box">
                <div className="committee_title" id="profdev"><h1>Professional Development</h1></div>
                <Row>
                    <Col md={6}>
                        <Image className="project-img" src={require("../assets/committee/classtips.jpg")} responsive rounded/>
                    </Col>
                    <Col md={6}>
                        <div className="project-content">
                            <p className="boxtitle">Class Advising</p>
                            <p className="boxdesc">This seminar presents valuable information regarding scheduling and classes. Upperclassmen share their experiences and help other students choose the right classes to enrich their academic experience at Berkeley.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Image className="project-img" src={require("../assets/committee/knf.jpg")} responsive rounded/>
                    </Col>
                    <Col md={6}>
                        <div className="project-content">
                            <p className="boxtitle">Korea Networking Forum</p>
                            <p className="boxdesc">Korea Network Forum is a job fair co-hosted by KSEA, KUNA, Kojobs, and ASUC to provide an opportunity for Korean undergraduate and graduate students to recruit for internships/jobs and form professional networks.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="committee_box">
                <div className="committee_title" id="finance"><h1>Finance</h1></div>
                <Row>
                    <Col md={6}>
                        <Image className="project-img" src={require("../assets/committee/fundraiser.jpg")} responsive rounded/>
                    </Col>
                    <Col md={6}>
                        <div className="project-content">
                            <p className="boxtitle">Krispy Kreme Fundraiser</p>
                            <p className="boxdesc">Through the collective efforts of the entire club, the fundraising committee sold over 600 boxes of Krispy Kreme donuts. The proceeds are used to fund events held by all committees.</p>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Committee;
