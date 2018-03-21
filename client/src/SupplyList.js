import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import {Collapsible, Icon} from 'react-materialize'




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

  componentDidMount() {
    //call database using Axios. this route is set up in server.js
    //put all things in 1 big array -- allSupply[].
    //this call runs only once.
    axios.get('/api/supplylist').then(result => {
    this.setState({
      //we're getting the data sent from server.js
      allSupply: result.data
    }, () => console.log(this.state.allSupply))
    })


    // filter using swich case into 4 new arrays
  //   filterSupply(allSupply) {
  //     allSupply.forEach(function(item) {
  //       switch(true) {
  //         case item.category = "Medical":
  //           medicalArray.push(item.name)
  //           break;
  //         case item.category = "Food and Water":
  //           foodwaterArray.push(item.name)
  //           break;
  //         case item.category = "Tools and Supplies":
  //           toolArray.push(item.name)
  //           break;
  //         case item.category = "Tech":
  //           techArray.push(item.name)
  //           break;
  //         case item.category = "Documents":
  //           docArray.push(item.name)
  //           break;
  //         default:
  //           return 'foo';
  //       }
  //     })
  //
  //   }
  //
  }

  render() {
  {/*  //map through the 4 arrays i've built to create li elements
     // var medicalList = medicalArray.map((item,index) => <li key={index}>{item}</li>)
     // var foodwaterList = foodwaterArray.map((item,index) => <li key={index}>{item}</li>)
     // var toolList = toolArray.map((item,index) => <li key={index}>{item}</li>)
     // var techList = techArray.map((item,index) => <li key={index}>{item}</li>)
     // var docList = docArray.map((item,index) => <li key={index}>{item}</li>)
*/}


      return (
        <div>
          <Row>
          {/* // <Collapsible accordion>
          //
          //   <CollapsibleItem header='Medical' icon='filter_drama'>
          //
          //   </CollapsibleItem>
          //
          //   <CollapsibleItem header='Food & Water' icon='place'>
          //
          //   </CollapsibleItem>
          //
          //   <CollapsibleItem header='Tools & Supplies' icon='whatshot'>
          //
          //   </CollapsibleItem>
          //
          //   <CollapsibleItem header='Tech' icon='whatshot'>
          //
          //   </CollapsibleItem>
          //
          //   <CollapsibleItem header='Documents' icon='whatshot'>
          //
          //   </CollapsibleItem>
          //
           // </Collapsible> */}
          </Row>
        </div>
      )
    }
  }


export default SupplyList;
