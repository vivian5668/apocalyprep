import React from 'react';
import Alerts from './Alerts';

const ImageAccordion = props => {
  return (
    <div>
      <div className="container">
        <Alerts />
      </div>
      <h3> ImageAccordion </h3>
    	<div className="container">

		    <div className="slider-container">
		      <div className="flexbox-slider flexbox-slider-1">
		        <div className="flexbox-slide">
		       	  <div className="verticalText"><p><span>Tsunami</span></p></div>
		          <img src="./image/tsunami.gif" alt="Slide Image" />

		          <div className="text-block">
		            <h3>Slide #1 is here</h3>
		            <div className="text">
		              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
		            </div>
		          </div>
		        </div>
		        <div className="flexbox-slide">
		         <div className="verticalText-Hurricane"><p><span>Hurricane</span></p></div>
		          <img src="./image/hurricane.gif" alt="Slide Image" />
		          <div className="text-block">
		            <h3>Slide #2 is here</h3>
		            <div className="text">
		              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
		            </div>
		          </div>
		        </div>
		        <div className="flexbox-slide">
		          <div className="verticalText"><p><span>Tornado</span></p></div>
		          <img src="./image/tornado.gif" alt="Slide Image" />
		          <div className="text-block">
		            <h3>Slide #3 is here</h3>
		            <div className="text">
		              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
		            </div>
		          </div>
		        </div>
		        <div className="flexbox-slide">
		          <div className="verticalText-Earthquake"><p><span>Earthquake</span></p></div>
		          <img src="./image/earthquake.gif" alt="Slide Image" />
		          <div className="text-block">
		            <h3>Slide #4 is here</h3>
		            <div className="text">
		              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
		            </div>
		          </div>
		        </div>
		        <div className="flexbox-slide">
		         <div className="verticalText"><p><span>Wildfire</span></p></div>
		          <img src="./image/wildfire.gif" alt="Slide Image" />
		          <div className="text-block">
		            <h3>Slide #5 is here</h3>
		            <div className="text">
		              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>


		</div>
    </div>
  )
}

export default ImageAccordion
