import React, { Component } from 'react';
import '../assets/footer.css';
import 'font-awesome/css/font-awesome.min.css';
class Footer extends Component {

  render() {
    var ocf_logo_style = {border: 0, right:0, position:'absolute'};
    return (
      <div className={"Footer"}>
        <div id='developers'> Developed By Gun Choi, Bill Yeo, Henry Kyung, Lucie Choi |
        Logo By Hyemin Choi. <a href="https://www.facebook.com/groups/123542081635749/?ref=bookmarks"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href='http://google.com'><i class="fa fa-google-plus" aria-hidden="true"></i></a>
        <div class="disclaimer">We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.</div>
    </div>




      </div>
    );
  }
}

export default Footer;
