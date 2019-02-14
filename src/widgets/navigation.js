import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../assets/navigation.css';
import logo from '../assets/KSEA LOGO BEAR.svg'

class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render() {

    	var Navbar = ReactBootstrap.Navbar;
        var Nav = ReactBootstrap.Nav;
        var NavItem=ReactBootstrap.NavItem;



        return (
            <div>
          <Navbar className={"navbar" + this.props.css} inverse collapseOnSelect>

            <Navbar.Header>
              <Navbar.Brand>
                <a href="/" className={"Applogo" + this.props.css} ><img src={logo} id="thelogo" /></a>
               </Navbar.Brand>
            </Navbar.Header>

                <Nav>
                    {/*<NavItem className = {"navitem" + this.props.css} eventKey={1} href="/#about">About</NavItem>*/}
                    <a className = {"navitem"} eventKey={2} href="/committee">Projects</a>
                    <a className = {"navitem"} eventKey={3} href="/members">Members</a>
                    <a className = {"navitem"} eventKey={4} href="/events">Events</a>
                    <a className = {"navitem"} eventKey={5} href="/contact">Contact</a>
                    <a className = {"navitem"} eventKey={5} href="/login">Login</a>
                </Nav>


          </Navbar>

          </div>
        );

    }
}
export default Navigation;

