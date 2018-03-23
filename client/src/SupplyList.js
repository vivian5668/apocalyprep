import React, { Component } from 'react';
import axios from 'axios';
import { Collapsible, CollapsibleItem, Input, Row, Col } from 'react-materialize'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user,
    googleUser: state.googleUser
  }
}

class ConnectedSupplyList extends Component  {

  constructor() {
    super();
    this.state = {
      allSupply: [],
      medicalArray: [],
      foodwaterArray: [],
      toolArray: [],
      techArray: [],
      docArray: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.filterSupply = this.filterSupply.bind(this)
  }

  handleChange(e) {

    var name = e.target.value.split('%')[0]
    var category = e.target.value.split('%')[1]
    let supply = {
      name: name,
      category: category
    }
    axios.post('/addsupplies', {
      user: this.props.user,
      item: supply
    }).then(result => {

    })
  }

  filterSupply = () => {

    // filter all supplies into categories & new arrays using swich case
    this.state.allSupply.forEach((item) => {
      switch(true) {
        case item.category === "Medical":
          this.setState({
            medicalArray: [...this.state.medicalArray, item]
          })
          break;
        case item.category === "Food and Water":
          this.setState({
            foodwaterArray: [...this.state.foodwaterArray, item]
          })
          break;
        case item.category === "Tools and Supplies":
          this.setState({
            toolArray: [...this.state.toolArray, item]
          })
          break;
        case item.category === "Tech":
          this.setState({
            techArray: [...this.state.techArray, item]
          })
          break;
        case item.category === "Documents":
          this.setState({
            docArray: [...this.state.docArray, item]
          })
          break;
        default:
          return 'foo';
      }
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
    

     // map through the 5 arrays i've built to create li elements
     var medicalList = this.state.medicalArray.map((item,index) =>
     <div>
       <li key={index} className='supplylistitems filled-in-li'>
        <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label={item.name} className='filled-in style-checkbox' onChange={this.handleChange} />
       </li>
       <br />
      </div>)

     var foodwaterList = this.state.foodwaterArray.map((item,index) =>
     <div>
       <li key={index}  className='supplylistitems filled-in-li'>
       <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label={item.name} className='filled-in style-checkbox'onChange={this.handleChange} />
       </li>
       <br />
     </div>)

     var toolList = this.state.toolArray.map((item,index) =>
     <div>
       <li key={index} className='supplylistitems filled-in-li'>
       <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label={item.name} className='filled-in style-checkbox' onChange={this.handleChange} />
       </li>
       <br />
     </div>)

     var techList = this.state.techArray.map((item,index) =>
     <div>
       <li key={index}  className='supplylistitems filled-in-li'>
       <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label={item.name} className='filled-in style-checkbox' onChange={this.handleChange} />
       </li>
       <br />
     </div>)

     var docList = this.state.docArray.map((item,index) =>
    <div>
       <li key={index}  className='supplylistitems filled-in-li'>
       <Input name='group1' type='checkbox' value={item.name + '%' + item.category} label={item.name} className='filled-in style-checkbox' onChange={this.handleChange}  />
       </li>
       <br />
     </div>)


      return (
        <Row>
          <Col s={12}>
            <div>
              <Collapsible accordion className="collapsible-accordion allsupplyheader">

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
            </div>
          </Col>
        </Row>
      )

  }
}

const SupplyList = connect(mapStateToProps, null)(ConnectedSupplyList);

export default SupplyList;
