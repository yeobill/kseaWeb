import React, { Component } from 'react';
import '../assets/animation.css';
import $ from 'jquery';



class Animation extends Component {
  render() {



    return (
      <div className="Animation">
        <div class="menu active">
		  <div class="btn trigger" id="kseabutton">
		  <div id="kseaspan">
		  	<p class='css-typing'>Different</p>
			<p class='css-typing'>Majors</p>
			<p class='css-typing'>Come</p>
			<p class='css-typing'>Together</p>
		  </div>
		  </div>
		  <div class="icons">
		    <div class="rotater">
		      <div class="btn btn-icon"  id="chem">
		        <i class="fa"></i>
		      </div>
		    </div>
		    <div class="rotater">
		      <div class="btn btn-icon" id="econ">
		        <i class="fa" ></i>
		      </div>
		    </div>
		    <div class="rotater">
		      <div class="btn btn-icon" id="bio">
		        <i class="fa"></i>
		      </div>
		    </div>
		    <div class="rotater">
		      <div class="btn btn-icon" id="mech">
		        <i class="fa"></i>
		      </div>
		    </div>
		    <div class="rotater">
		      <div class="btn btn-icon" id="stat">
		        <i class="fa"></i>
		      </div>
		    </div>
		    <div class="rotater">
		      <div class="btn btn-icon" id="eecs">
		        <i class="fa"></i>
		      </div>
		    </div>

		  </div>
		</div>

	</div>

    );
  }
}

export default Animation;
