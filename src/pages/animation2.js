import React, { Component } from 'react';
import '../assets/animation2.css';
import $ from 'jquery';



class Animation2 extends Component {
  render() {
  		function ItemFadeIn(selector) {
		    var items = $(selector);
		    var index = 0;

		    function next() {
		        if (index < items.length) {
		            items.eq(index++).fadeIn(500, next);
		        }
		    }
		    next();
		}


  		$(document).ready(function(){
  			

  			$(".btn-icon2").hover(function(){
  				// $(this).html( $(this).attr('id').toUpperCase());
  			})
  			$(window).scroll(function() {
			    if (($('.Animation2').isOnScreen() === true) ) {
			    	ItemFadeIn(".btn-icon2");
			    	
			    } else  {
			    	$(".btn-icon2").hide();
			    }
			});
  		})
  // 		$.fn.isOnScreen = function(){

		//     var win = $(window);

		//     var viewport = {
		//         top : win.scrollTop(),
		//         left : win.scrollLeft()
		//     };
		//     viewport.right = viewport.left + win.width();
		//     viewport.bottom = viewport.top + win.height();

		//     var bounds = this.offset();
		//     bounds.right = bounds.left + this.outerWidth();
		//     bounds.bottom = bounds.top + this.outerHeight();

		//     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

		// };


  		
  	
  		
  	

    return (
      <div className="Animation2">
		  <div id="iconcontainer" className="shine1">
		  	<div>
		  	<img src={require("../assets/major/003-flask.svg")} className="btn-icon2" id="chem" />
		  	<img src={require("../assets/major/006-window.svg")} className="btn-icon2" id="cs" />
		  	<img src={require("../assets/major/001-business-1.svg")} className="btn-icon2" id="econ" />
		  	</div>
		  	<div>
		  	<img src={require("../assets/major/004-cogwheel.svg")} className="btn-icon2" id="mech" />
		  	<img src={require("../assets/major/002-business.svg")} className="btn-icon2" id="stat" />
		  	<img src={require("../assets/major/005-dna.svg")} className="btn-icon2" id="bio" />    
		  	</div>
		  </div>
		</div>

          
        
    );
  }
}

export default Animation2;
