import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import { Collapsible, CollapsibleItem, Input } from 'react-materialize'

class SupplyList extends Component  {

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
  }

  filterSupply = () => {
    // filter all supplies into categories & new arrays using swich case
    this.state.allSupply.forEach((item) => {
      switch(true) {
        case item.category === "Medical":
          this.setState({
            medicalArray: [...this.state.medicalArray, item.name]
          })
          break;
        case item.category === "Food and Water":
          this.setState({
            foodwaterArray: [...this.state.foodwaterArray, item.name]
          })
          break;
        case item.category === "Tools and Supplies":
          this.setState({
            toolArray: [...this.state.toolArray, item.name]
          })
          break;
        case item.category === "Tech":
          this.setState({
            techArray: [...this.state.techArray, item.name]
          })
          break;
        case item.category === "Documents":
          this.setState({
            docArray: [...this.state.docArray, item.name]
          })
          break;
        default:
          return 'foo';
      }
    }), () => console.log(this.state.foodwaterArray)
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
      console.log('hihi');
      this.filterSupply()
      console.log(this.state)

    })
  }

  render() {
     // map through the 5 arrays i've built to create li elements
     var medicalList = this.state.medicalArray.map((item,index) =>
     <li key={index}>
     <Input name='group1' type='checkbox' value='' label='green' className='filled-in' defaultChecked='checked' />
     {item}</li>)

     var foodwaterList = this.state.foodwaterArray.map((item,index) =>
     <li key={index}>
     <Input name='group1' type='checkbox' value='' label='green' className='filled-in' defaultChecked='checked' />
     {item}</li>)

     var toolList = this.state.toolArray.map((item,index) =>
     <li key={index}>
     <Input name='group1' type='checkbox' value='' label='green' className='filled-in' defaultChecked='checked' />
     {item}</li>)

     var techList = this.state.techArray.map((item,index) =>
     <li key={index}>
     <Input name='group1' type='checkbox' value='' label='green' className='filled-in' defaultChecked='checked' />
     {item}</li>)

     var docList = this.state.docArray.map((item,index) =>
     <li key={index}>
     <Input name='group1' type='checkbox' value='' label='green' className='filled-in' defaultChecked='checked' />
     {item}</li>)


      return (
        <div>

          <Collapsible accordion className="collapsible-accordion">
            <CollapsibleItem header='Medical' icon='arrow_drop_down_circle'>
              {medicalList}
            </CollapsibleItem>

            <CollapsibleItem header='Food & Water' icon='arrow_drop_down_circle'>
              {foodwaterList}
            </CollapsibleItem>

            <CollapsibleItem header='Tools & Supplies' icon='arrow_drop_down_circle'>
              {toolList}
            </CollapsibleItem>

            <CollapsibleItem header='Tech' icon='arrow_drop_down_circle'>
              {techList}
            </CollapsibleItem>

            <CollapsibleItem header='Documents' icon='arrow_drop_down_circle'>
              {docList}
            </CollapsibleItem>

          </Collapsible>

        </div>
      )

  }
}


export default SupplyList;
