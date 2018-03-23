import React, { Component } from 'react';
import axios from 'axios';
import { Collapsible, CollapsibleItem, Input } from 'react-materialize'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user,
    googleUser: state.googleUser
  }
}

class ConnectedEventEarthquake extends Component  {

  constructor() {
    super();
    this.state = {
      allSupply: [],
      earthquakeArray: [],
    }
    this.filterSupply = this.filterSupply.bind(this)
  }

  filterSupply = () => {

    // filter all supplies INTO 1 Category of earthquake
    this.state.allSupply.forEach((item) => {
      switch(true) {
        case item.category === "Earthquake":
          this.setState({
            earthquakeArray: [...this.state.earthquakeArray, item]
          })
          break;
        default:
          return 'foo';
      }
    })
  }

  componentWillMount() {
    this.setState({
      allSupply: []
    })
  }

  componentDidMount() {

    //call database using Axios. this route is set up in server.js
    //put all things in 1 big array -- allSupply[].
    //this call runs only once.

    axios.get('/api/supplylist').then(result => {

      this.setState({
        //we're getting the data sent from server.js
        allSupply: result.data
      })
    }).then(() => {

      this.filterSupply()


    })
  }

  render() {

    var earthquakeEvent = this.state.earthquakeArray.map((item,index) =>
      <div>
        <li key={index}  className='supplylistitems filled-in-li'>
        <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label={item.name} className='filled-in style-checkbox' onChange={this.handleChange} />
        </li>
        <br />
      </div>)

    return (
      <div>
        <ul>
          {earthquakeEvent}
        </ul>
      </div>
    )
  }
}

const EventEarthquake = connect(mapStateToProps, null)(ConnectedEventEarthquake);

export default EventEarthquake;
