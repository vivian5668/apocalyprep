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

class ConnectedEventTsunami extends Component  {

  constructor() {
    super();
    this.state = {
      allSupply: [],
      tsunamiArray: [],
    }
    this.filterSupply = this.filterSupply.bind(this)
  }

  filterSupply = () => {

    // filter all supplies INTO 1 Category of wildfire
    this.state.allSupply.forEach((item) => {
      switch(true) {
        case item.category === "Tsunami":
          this.setState({
            tsunamiArray: [...this.state.tsunamiArray, item]
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

    var tsunamiEvent = this.state.tsunamiArray.map((item,index) =>
       <li key={index}>
       <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
       {item.name}</li>)

    return (
      <div>
          <ul>
            {tsunamiEvent}
          </ul>
        </div>
    )
  }
}

const eventtsunami = connect(mapStateToProps, null)(ConnectedEventTsunami);

export default eventtsunami;
