import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { setPoint } from './actions/index';

const mapDispatchToProps = dispatch => { //dispatch here is a function
  //this is a closure, it returns on object, it has a property addArticle
  //this property is a function that turns article to a function
  //this is a programming techinique, a func takes multiple parameters
  //now it is reduced to one
  return {
    setPoint: (point) => dispatch(setPoint(point)),
  }
}


const mapStateToProps = state => {
  return {
    point: state.point
  }
}

class ConnectedLocationEnter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      // point: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({address: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("address: " + this.state.address)
    Geocode.fromAddress(this.state.address).then(
       response => {
         const { lat,lng } = response.results[0].geometry.location;
         var point = lat + ',' + lng
         this.props.setPoint(point)
         // this.setState({
         //   point: point
         // })
         // console.log(response.results[0].geometry.location)
         // console.log(lat,lng);
         console.log(point)
       },
       error => {
         console.error(error);
       }
     );
  }

  render() {
    return (
      <form className='locationform' onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.address} onChange={this.handleChange} />
        </label>
        <input className='btn waves-effect grey darken-4 white-text' type="submit" value="Submit" />
      </form>
    );
  }
}

const LocationEnter = connect(null, mapDispatchToProps)(ConnectedLocationEnter)

export default LocationEnter;
