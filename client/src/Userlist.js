import React, { Component } from 'react';
import axios from 'axios';
import { Collapsible, CollapsibleItem, Input, Row, Col } from 'react-materialize'
import { connect } from 'react-redux';
import Alerts from './Alerts';
import SupplyList from './SupplyList';

const mapStateToProps = state => {
  return {
    user: state.user,
    googleUser: state.googleUser
  }
}

class ConnectedUserList extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      allSupply: []
    }
  }

  componentDidUpdate() {
    console.log(this.state.allSupply)
    console.log(this.state.allSupply.length === 0)
    if (this.state.allSupply.length === 0) {
      console.log("here be the user in compenetdidupdate", this.props.user.supplies);
      var newArr = this.props.user.supplies
      this.setState({
        allSupply: newArr
      })
    }
  }

  render() {
    let medicalArray = []
    let foodwaterArray = []
    let toolArray = []
    let techArray = []
    let docArray = []
    // filter all supplies into categories & new arrays using swich case
    this.state.allSupply.forEach((item) => {
      console.log('in all supply filter function', this.state.allSupply);
      switch(true) {
        case item.category === "Medical":
          medicalArray.push(item)
          break;
        case item.category === "Food and Water":
          foodwaterArray.push(item)
          break;
        case item.category === "Tools and Supplies":
         toolArray.push(item)
          break;
        case item.category === "Tech":
          techArray.push(item)
          break;
        case item.category === "Documents":
          docArray.push(item)
          break;
        default:
          return 'foo';
      }
    })
     var medicalList = medicalArray.map((item,index) =>
     <li key={index} className='supplylistitems'>
     <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
     {item.name}</li>)

     var foodwaterList = foodwaterArray.map((item,index) =>
     <li key={index} className='supplylistitems'>
     <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
     {item.name}</li>)

     var toolList = toolArray.map((item,index) =>
     <li key={index} className='supplylistitems'>
     <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
     {item.name}</li>)

     var techList = techArray.map((item,index) =>
     <li key={index} className='supplylistitems'>
     <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange} />
     {item.name}</li>)

     var docList = docArray.map((item,index) =>
     <li key={index} className='supplylistitems'>
     <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label='green' className='filled-in' onChange={this.handleChange}  />
     {item.name}</li>)


      return (
        <Row>
          <Col s={4} className='alertcol'>
            <Alerts />
          </Col>
          <Col s={4} className='supplylistcol'>
            <h1 className='supplyheader'>All Supplies</h1>
            <SupplyList />
          </Col>
          <Col s={4} className='userlistcol'>
            <h1 className='supplyheader'>My Supplies</h1>
            <Collapsible accordion className="collapsible-accordion">
              <CollapsibleItem header='Medical' icon='arrow_drop_down_circle'>
                <ul>{medicalList}</ul>
              </CollapsibleItem>
              <CollapsibleItem header='Food & Water' icon='arrow_drop_down_circle'>
                <ul>{foodwaterList}</ul>
              </CollapsibleItem>
              <CollapsibleItem header='Tools & Supplies' icon='arrow_drop_down_circle'>
                <ul>{toolList}</ul>
              </CollapsibleItem>
              <CollapsibleItem header='Tech' icon='arrow_drop_down_circle'>
                <ul>{techList}</ul>
              </CollapsibleItem>
              <CollapsibleItem header='Documents' icon='arrow_drop_down_circle'>
                <ul>{docList}</ul>
              </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>
      )

  }
}

const UserList = connect(mapStateToProps, null)(ConnectedUserList);

export default UserList;
