import React from 'react';
import Alerts from "./Alerts";
import {Row, Col} from 'react-materialize';


const ImageAccordion = props => {
  return (
    <Row className="accordionPage">
    	<div className="alertDiv">
    		<Alerts />
    	</div>
    	<div className="accordionDiv">
  
		    <div className="slider-container">
		      <div className="flexbox-slider flexbox-slider-1">
		        <div className="flexbox-slide">
		       	  <div className="verticalText"><p><span>Tsunami</span></p></div>
		          <img src="./image/tsunami.gif" alt="Slide Image" />

		          <div className="text-block">
		            <h3>Tsunami</h3>
		            <div className="text">
		              <p>A tsunami or tidal wave, also known as a seismic sea wave, is a series of waves in a water body caused by the displacement of a large volume of water, generally in an ocean or a large lake. -Wikipedia</p>
		            </div>
		          </div>
		        </div>
		        <div className="flexbox-slide">
		         <div className="verticalText-Hurricane"><p><span>Hurricane</span></p></div>
		          <img src="./image/hurricane.gif" alt="Slide Image" />
		          <div className="text-block">
		            <h3>Hurricane</h3>
		            <div className="text">
		              <p>A hurricane / tropical cyclone is a rapidly rotating storm system characterized by a low-pressure center, a closed low-level atmospheric circulation, strong winds, and a spiral arrangement of thunderstorms that produce heavy rain. -Wikipedia</p>
		            </div>
		          </div>
		        </div>
		        <div className="flexbox-slide">
		          <div className="verticalText"><p><span>Tornado</span></p></div>
		          <img src="./image/tornado.gif" alt="Slide Image" />
		          <div className="text-block">
		            <h3>Tornado</h3>
		            <div className="text">
		              <p>A tornado is a rapidly rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud or, in rare cases, the base of a cumulus cloud. -Wikipedia</p>
		            </div>
		          </div>
		        </div>
		        <div className="flexbox-slide">
		          <div className="verticalText-Earthquake"><p><span>Earthquake</span></p></div>
		          <img src="./image/earthquake.gif" alt="Slide Image" />
		          <div className="text-block">
		            <h3>Earthquake</h3>
		            <div className="text">
		              <p>An earthquake (also known as a quake, tremor or temblor) is the shaking of the surface of the Earth, resulting from the sudden release of energy in the Earth's lithosphere that creates seismic waves. -Wikipedia</p>
		            </div>
		          </div>
		        </div>
		        <div className="flexbox-slide">
		         <div className="verticalText"><p><span>Wildfire</span></p></div>
		          <img src="./image/wildfire.gif" alt="Slide Image" />
		          <div className="text-block">
		            <h3>Wildfire</h3>
		            <div className="text">
		              <p>A wildfire or wildland fire is a fire in an area of combustible vegetation that occurs in the countryside or rural area. It could cause serious death or injury. -Wikipedia</p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		    
	 
		</div>
    </Row>
  )
}

export default ImageAccordion
