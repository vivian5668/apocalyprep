import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
  return (

    <div className='row'>
      <div className='row'>
        <div className='col s2'></div>
        <div className='col s8'>
          <h1>Apocalyprep Home</h1>
        </div>
        <div className='col s2'></div>
      </div>
      <div className='row'>
        <form className='col s12'>
          <div className='col s3'></div>
          <div className='input-field col s6'>
            <input id="zip" type="text" className="validate" />
            <label htmlFor="zip">Enter your Zip Code</label>
          </div>
          <div className='col s3'></div>
        </form>
      </div>
   </div>
  )
}

export default Home