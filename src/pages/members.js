
import React, { Component } from 'react';
import {Grid, Row, Image, Thumbnail, Col} from 'react-bootstrap';

import Navigation from "../widgets/navigation";
import Bubble from "../widgets/bubble";
import '../assets/members.css';
import Footer from "../widgets/footer.js";

// Lucie imports

import $ from 'jquery';


class Members extends Component {


  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       img_lst: []
  //     };
  //     this.importAll = this.importAll.bind(this);
  // };

  // componentWillMount(){
  //   fs.read
  //   var temp;
  //   this.setState(){
  //     imgNameList: temp;
  //   }
  // }

  // importAll() {
  //   console.log(require.context('../assets/profile/', false, /\.(png</a>|j<a>pe?g</a>|s<a>vg)$/));

  //   for (var i=0; i < this.state.imgNameList.length; i ++) {
  //     img_lst.push(<Bubble image={""+lst[i]}></Bubble>);
  //   }
  //   this.setState({
  //     img_lst: img_lst
  //   });
  // };
// <Col className="detail-container" md={4}>
//                 <img className="xlpicture" src={require("../assets/profile/bill1.jpg")} responsive xlpicture/>
//                 <div className="name">Donghyun Yeo</div>
//                 <div className="year">EECS '18</div>
//                 <div className="description">
//                   I am a senior studying Electrical Engineering and Computer Science.<br/> I am a developer on kseatatberkeley.com. I enjoy watching baseball.
//                 </div>
//               </Col>
  render() {
    //Lucie function
    $(window).ready(function(){

      $("#allmembers").click(function(){
        $(".photocontainer").show();
        });
      $("#executivemembers").click(function(){
        $(".photocontainer").hide();
        $(".executive").show();
        });
      $("#prmembers").click(function(){
        $(".photocontainer").hide();
        $(".pr").show();
        });
      $("#projectmembers").click(function(){
        $(".photocontainer").hide();
        $(".project").show();
        });
      $("#socialmembers").click(function(){
        $(".photocontainer").hide();
        $(".social").show();
        });
      $("#financemembers").click(function(){
        $(".photocontainer").hide();
        $(".finance").show();
        });
      $("#pdmembers").click(function(){
        $(".photocontainer").hide();
        $(".pd").show();
        });
      $("#gmmembers").click(function(){
        $(".photocontainer").hide();
        $(".gm").show();
        });

    })



    return (

      <div className="Members">
        <Navigation></Navigation>
        <div id="groupphoto">
          <div id="viewmembersbutton" style={{display: 'none'}}>
              <span className='buttonspan'>View Members</span>
          </div>
        </div>

        <div id="memberscontent" >
          <div id='membertitle' >
            <b><h1 id='memberstitleheader'>Members</h1></b>
            <div id="committeesort">
            <h4>
              <a id="allmembers" >All </a> | <a id="executivemembers" >Executive</a> | <a id='prmembers'>Public Relations </a>| <a id='projectmembers'> Project </a>|
              <a id='socialmembers'> Social </a>| <a id='financemembers'>Finance </a>| <a id='pdmembers'>Professional Development </a>| <a id='gmmembers'>General Member</a>
             </h4>
           </div>
          </div>

        <div className="photocontainer executive">

            <Row className="bg-color">

              <Col className="smpicture-container" md={12}>
                <div className='membersubtitle' id="executivemembers"><b><h2 style={{position: 'absolute', bottom: 0, width: "100%",margin: 'auto'}}>Executive</h2></b></div>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom" src={require("../assets/profile/grace1.png")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                        Hello! I'm a senior MCB major with a concentration in neuroscience.<br /> I was raised in Japan and my hobbies include singing, baking, and reading. KSEA has been a wonderful part of my college life--if you're a student, check it out!
                    </div>
                  </div>
                  <div className="member-profile" >
                  <div className="name">Grace Yun
                  </div>
                  <div className="position" >President</div>
                  </div>
                </Col>

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/andy1.png")} alt="242x200" responsive/>
                  <div className="member-profile" >
                    <div className="name">Andy Suh
                    </div>
                    <div className="position" >Vice President</div>
                    </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                       Hello! My name is Andy and I am the vice president of KSEA at Cal. I have been involved in this organization for 3 years and its been an amazing experience seeing this club grow! I love going for a food run in my free time. Please join KSEA if you want to meet amazing people! :)
                    </div>
                  </div>
                </Col>

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/sangyoon.png")} alt="242x200" responsive/>
                  <div className="member-profile" >
                    <div className="name">Sangyoon Oh </div>
                    <div className="position" >Vice President</div>
                    </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                        Hi I'm Sangyoon, the External Vice-President of KSEA. Right now I'm a junior studying Applied Math and Statistics. KSEA has allowed me to get to know so many smart and talented people and has also opened the door for me in terms of career opportunities.
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>

        </div>
        <div className="photocontainer pr">

            <Row className="bg-color">
              <Col className="smpicture-container" md={12}>
            <div className='membersubtitle' id="prmembers"><b><h2 style={{position: 'absolute', bottom: 0, width: "100%",margin: 'auto'}}>Public Relations</h2></b></div>

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom" src={require("../assets/profile/taehee1.png")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hello! My name is TaeHee and I'm senior majoring in Chemical Biology. I enjoy playing mobile game and cooking.
                    </div>
                  </div>
                  <div className="member-profile">
                  <div className="name">Taehee Kim </div>
                    <div className="position" >Chair</div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jianne.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p>Jianne Jung </p>

                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I love everything except for the things I hate (like culturing bacteria).
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/hyemin.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p>Hyemin Choi </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hello. My name is Deanna. I'm a sophomore in UC Berkeley, majoring in Integrated Biology. I love getting to know different people and KSEA was the perfect place for me to meet people who are deeply engaged in science related interest.
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
        </div>
        <div className="photocontainer project">
              <Col className="smpicture-container" md={12}>
            <div className='membersubtitle' id='startupmembers'><b><h2 style={{position: 'absolute', bottom: 0, width: "100%",margin: 'auto'}}>Software Engineering</h2></b></div>

               <Row className="bg-color">

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/gunwoo.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <div className="name">Gunwoo Choi </div>
                    <div className="position" >Chair</div>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                        I am a senior studying Electrical Engineering and Computer Science.<br/> I will found a company that will help the world in sooner future.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom bill" src={require("../assets/profile/bill.png")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                        I am a senior studying Electrical Engineering and Computer Science.<br/> I am a developer on kseaatcal.com. I enjoy watching baseball.
                    </div>
                  </div>
                  <div className="member-profile">
                  <p> Donghyun Yeo </p>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/henry.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Henry Kyung </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                        I am a senior studying Electrical Engineering and Computer Science.<br/> I am a developer on kseatatberkeley.com. I enjoy watching baseball.
                    </div>
                  </div>
                </Col>
                </Row>
                <Row>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/yoonsun.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Yoonsun Choi </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hi, I am a second year CS/Stat major with an interest in data science. I play violin and skateboard in my free time. I am passionate about baroque music and existentialism. Talk to me if you are, too!
                    </div>
                  </div>
                </Col>
              </Row>

              </Col>
        </div>
        <div className="photocontainer project">

              <Col className="smpicture-container" md={12}>
            <div className='membersubtitle' id='researchmembers'><b><h2 style={{position: 'absolute', bottom: 0, width: "100%",margin: 'auto'}}>Research</h2></b></div>

            <Row className="bg-color">

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom" src={require("../assets/profile/hyunook.png")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a fourth year Statistics, ORMS double major. I like to play tennis, discover new things, and sleep. Feeling very excited to graduate.
                    </div>
                  </div>
                  <div className="member-profile">
                  <div className="name">Hyunook Go </div>
                    <div className="position" >Chair</div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jinyu.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Jinyu Park </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a senior majoring in Applied Math with concentration in Statistics. I've been in the States for about nine years now, and have lived in all three parts of the U.S.: the East coast, the Midwest, and the West coast.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/beomjin.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Beom Jin Lee </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am an aspiring computer scientist. In my pastime, I enjoy solving puzzles of all types, whether they are new Rubik's cubes or brain teasers on the web. Another hobby of mine is watching TV and flooding myself in temporary euphoria.
                    </div>
                  </div>
                </Col>
              </Row>

              </Col>
        </div>
        <div className="photocontainer social">

              <Col className="smpicture-container" md={12}>
            <div className='membersubtitle' id='socialmembers'><b><h2 style={{position: 'absolute', bottom: 0, width: "100%",margin: 'auto'}}>Social</h2></b></div>

            <Row className="bg-color">

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom" src={require("../assets/profile/samuel.JPG")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Research interest: protein nanotechnology, enzyme scaffolding, self-assembly of supramolecular biomaterials
                    </div>
                  </div>

                  <div className="member-profile">
                  <div className="name"> Samuel Lim </div>
                    <div className="position" >Chair</div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jae.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p>  Jae Pyun </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I'd like to travel over all around. My first priority during the travel is to try new good foods!! My future goal is to make enough money to travel when I have a free time.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/hyeji1.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Hyeji Kim </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a senior majoring in Economics. I like watching videos of cats in my spare time. I also like playing badminton and squash.
                    </div>
                  </div>
                </Col>
                </Row>
                <Row>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jeniffer.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Jennifer Lee </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hello! I am a sophomore at Cal studying Molecular and Cellular Biology. Currently, I serve as a board member in the social committee of KSEA. Aside from Biology, my passions include traveling, music, film, and theater.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/hyeonjung.jpg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Hyeonjung Kim </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I'm a sophomore studying Applied Mathematics. I'm also interested in data science. I love watching movies and cartoons.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/tk.jpg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Taehyung Kim </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I'm an easy-going person that works well with everyone. I enjoy being around different types of people and I like to always challenge myself to improve at everything I do.
                    </div>
                  </div>
                </Col>
            </Row>

              </Col>
        </div>
        <div className="photocontainer finance">

              <Col className="smpicture-container" md={12}>
            <div className='membersubtitle' id='financemembers'><b><h2 style={{position: 'absolute', bottom: 0, width: "100%",margin: 'auto'}}>Finance</h2></b></div>

            <Row className="bg-color">

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom" src={require("../assets/profile/hyejin.png")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a senior majoring in Applied Math. I like to travel around the world and I love the nature. I love to meet with people and talk about many things. I love cats and watching cat videos on Youtube.
                    </div>
                  </div>
                  <div className="member-profile">
                  <div className="name"> Hyejin Kim </div>
                    <div className="position" >Chair</div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/hyunseung1.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Hyunseung Shon </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a senior studying physics who just wants to graduate. In my free time, I enjoy gaming and kendo. Even so, I think there is always time for good food.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/yeonji.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Yeonji Chu </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I'm a sophomore intending to study economics or mathematics. I'm from San Diego and I'm loving the bay area!
                    </div>
                  </div>
                </Col>
                </Row>
                <Row>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jiwoo.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Jiwoo Kim </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a freshman studying Integrative Biology. I love watching baseball, and I'm a big fan of Doosan Bears.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/angela.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Angela Lee </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I'm Angela Lee and I am a first year majoring in MEB. I love anything related to food watching food videos, late night snacking, and trying out new cafes and restaurants. I also enjoy hanging out with friends and watching movies in my free time.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/iksuk.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Iksuk Lee </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">

                        I am a junior studying Chemical Engineering. In my spare time, I enjoy playing drums and taking a picture.
                    </div>
                  </div>
                </Col>
            </Row>

              </Col>
        </div>
        <div className="photocontainer pd">

              <Col className="smpicture-container" md={12}>
            <div className='membersubtitle' id='pdmembers'><b><h2 style={{position: 'absolute', bottom: 0, width: "100%",margin: 'auto'}}>Professional Development</h2></b></div>

            <Row className="bg-color">

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom" src={require("../assets/profile/hyunho2.jpg")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hey everyone! I have been a member of KSEA at Cal for 3 years (Finance Chair in 2013 / Project Team Leader and Professional Development Chair in 2017) and joining KSEA was one of the best choices I made in Berkeley. I lived in 5 different countries before I came to Cal and I enjoy playing tennis in my free time :p
                    </div>
                  </div>
                  <div className="member-profile">
                  <div className="name"> Hyunho Jung </div>
                    <div className="position" >Chair</div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/taesung.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Taesung Park </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                    I do research in artificial intelligencce and computer vision. I enjoy occasional outing at night to nearby areas for stargazing.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom" src={require("../assets/profile/heeseon.jpeg")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hi, I am a senior majoring Econ at Cal. In my spare time, I enjoy going to a new restaurant and reading a book.
                    </div>
                  </div>
                  <div className="member-profile">
                    <p> Heeseon Kim </p>
                  </div>
                </Col>
                </Row>
                <Row>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/nayeon.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Nayeon Kang </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a freshman intending to double major in public health and toxicology. I'm also part of the Army ROTC program at Berkeley and hope to be an Army Surgeon. I enjoy horse riding in my free time.
                    </div>
                  </div>
                </Col>
            </Row>

              </Col>
        </div>
        <div className="photocontainer gm">

            <Row className="bg-color">
              <Col className="smpicture-container" md={12}>
            <div className='membersubtitle' id='gmmembers'><b><h2 style={{position: 'absolute', bottom: 0, width: "100%",margin: 'auto'}}>General Member</h2></b></div>

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jiwon.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p>  Jiwon Lee </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a senior majoring in media studies. I enjoy meeting new people and finding ways to help them have an uplifting experience.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                    <Image className="grey-scale smpicture" src={require("../assets/profile/wonwoo2.jpeg")} alt="242x200" responsive/>
                    <div className="member-profile">
                      <p>  Wonwoo Choi  </p>
                    </div>
                    <div className="hvrbox-layer_top">
                      <div className="hvrbox-text">
                        I am a first year student, majoring Civil Engineeering. I like to play soccer in my spare time.
                      </div>
                    </div>
                  </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture hvrbox-layer_bottom" src={require("../assets/profile/minyoung2.jpeg")} alt="242x200" responsive/>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      My name is Min Young and I'm majoring in Chemical Engineering. I love watching movies and my favorite genre is horror.
                    </div>
                  </div>
                  <div className="member-profile">
                    <p> Minyoung Um </p>
                  </div>
                </Col>

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/charles.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Charles You </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I'm a junior studying computer science and economics! I am a Korean Canadian who loves living in the bay area and plans to work here after graduation.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jiwoon.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Ji Choi  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hi! My name is Ji and I am a freshman intending to major in Business Administration. I am currently enrolled in Air Force ROTC to achieve my dream of being a pilot. In my spare time, I like to play soccer and drums.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jody.PNG")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Jody Lee  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am Jody Lee and I am an intended MCB and PH double major.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/sabin.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Sabin Kim  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a freshman majoring in sustainable environmental design. I love watching movies and playing sports.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/hyeonjo.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Hyeonjo Jeong  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Im a freshman from Seoul, Korea majoring in Economics. My favorite shows are Gossip Girl and Greys Anatomy. My favorite place to travel to is Japan.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jiwonshin.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Jiwon Shin  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a freshman majoring civil engineering. In my spare time, I like to play videogames and soccer.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/joy.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Joy Jung  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hi, my name is Joy! I'm a Harry Potter enthusiast and a sushi lover. Stem cells are a fascinating topic to me, so I aspire to be part of the regenerative medicine field in the future.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/donghoon1.jpg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Brian Yoo </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Brian Yoo is a third year who is majoring in Industrial Engineering and Operations Research, and minoring in Statistics. Brian was raised mostly in Seoul, South Korea where he attended high school as well. In his free time, Brian likes to relax over music or be active by playing sports with friends.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jiyoun1.jpg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Jiyoun Kim  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Dog lover crazy over Game of Thrones and House of Cards. Known movie fanatic and extreme foodie. Ambitious freshie who studies hard and parties harder.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/eugene.png")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Eugene Lee  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I'm a freshman intending to study Molecular and Cell Biology. I love spending time with my friends and family, listening to music, and I have an obsession with Ici Ice-cream.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/kyeongsik.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Kyeongsik Nam  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hi, my name is Kyeongsik Nam. I am studying Mathematics in UC Berkeley. Nice to meet you!
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/irene.JPG")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Irene Ha  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Academically, I am interested in data science. Apart from that, I love eating, taking photos and spending time with my people.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/jaewon.jpg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p> Jaewon Shim  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am Jaewon Shim and I am a freshmen. I grew up in Florida and Seoul. I live to eat.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/isaac1.jpg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p>  Isaac Lee  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a freshman at UC Berkeley, intending to major in Integrative Biology. I went to a Performing Arts high school in Los Angeles. On my spare time, I make music.
                    </div>
                  </div>
                </Col>
                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/hyunwoo.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p>  Hyunwoo Song </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      I am a senior major in mechanical engineering. I am interested in controling car mechanism and car design from inside out. I want to be a car manufacturing process and developing engineer & industrial designer.
                    </div>
                  </div>
                </Col>

                <Col md={4} className="nopadding hvrbox">
                  <Image className="grey-scale smpicture" src={require("../assets/profile/wonjun.jpeg")} alt="242x200" responsive/>
                  <div className="member-profile">
                    <p>  Wonjun Jang  </p>
                  </div>
                  <div className="hvrbox-layer_top">
                    <div className="hvrbox-text">
                      Hi, Im Wonjun. Im an exchange student from Postech in Korea. Im interested in bio engineering and start up.
                    </div>
                  </div>
                </Col>


              </Col>
            </Row>
        </div>
      </div>
        <div>
          <Footer/>
        </div>

      </div>




    );
  }
}

export default Members;
