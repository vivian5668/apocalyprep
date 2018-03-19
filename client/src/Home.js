import React from 'react';

export const Home = props => {
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
            <label for="zip">Enter your Zip Code</label>
          </div>
          <div className='col s3'></div>
        </form>
      </div>
    </div>
  )
}
