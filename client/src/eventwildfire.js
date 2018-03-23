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

class ConnectedEventWildfire extends Component  {

  constructor() {
    super();
    this.state = {
      allSupply: [],
      wildfireArray: [],
    }
    this.filterSupply = this.filterSupply.bind(this)
  }

  filterSupply = () => {

    // filter all supplies INTO 1 Category of wildfire
    this.state.allSupply.forEach((item) => {
      switch(true) {
        case item.category === "Wildfire":
          this.setState({
            wildfireArray: [...this.state.wildfireArray, item]
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

    var wildfireEvent = this.state.wildfireArray.map((item,index) =>
      <div>
        <li key={index}  className='supplylistitems filled-in-li'>
        <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label={item.name} className='filled-in style-checkbox' onChange={this.handleChange} />
        </li>
        <br />
      </div>)

    return (
      <div>
          <ul>
            {wildfireEvent}
          </ul>
        </div>
    )
  }
}

const EventWildfire = connect(mapStateToProps, null)(ConnectedEventWildfire);

export default EventWildfire;
