import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/main.css';
import Navigation from "../widgets/navigation";
import About from "../pages/about";
import $ from 'jquery';


// import Scroll from 'react-scroll';
// import {scroller} from 'react-scroll';
// import throttle from "underscore";

import Footer from "../widgets/footer.js";

// pause video
// add scrollbutton

class Main extends Component {

 constructor(){
    super();
    this.state = {
        changeNavCss: false
    }
    this.renderNavigation = this.renderNavigation.bind(this);
 }

 componentDidMount() {
    $(window).scroll(()=> {
        var scrollTop = $(window).scrollTop();
        if(scrollTop !==0) {
            this.setState({
                changeNavCss: true
            })
        } else {
            this.setState({
                changeNavCss: false
            })
        }
    })
  }

  renderNavigation(){
    const height = $(window).height();

    console.log('aa' + height);
    if (this.state.changeNavCss) {
        return (<Navigation css='_default'/>);
    }
    return (<Navigation />);
 }

  render() {

    return (
      <div className="Main">


        <div id="video-background">
            <Navigation css='main'/>
                <iframe id="player" type="text/html"
                src="https://www.youtube.com/embed/gEV6ZoWhzts?rel=0&controls=0&start=93&end=240&loop=1&showinfo=0&autoplay=1&mute=1&playlist=gEV6ZoWhzts"
                frameborder="0"></iframe>
          <div id="ksea"><img src={require("./../assets/logo1.svg")} id="logoimage" ></img></div>
          <span className="scroll-btn">
            <a href="#" >
              <span className="mouse">
                <span>
                </span>
              </span>
            </a>
            <p>Scroll Down</p>
          </span>
        </div>


        <About/>


      </div>
  )}

};
export default Main;




