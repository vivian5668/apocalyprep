import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';



class Supplylist extends Component  {

  constructor() {
    // this.newMedicalArray = [];
    // this.newToolArray = [];
    // this.newTechArray = [];
    // this.newDocArray = [];
  }

  componentDidMount() {


    //call database

    //get all things back in 1 big array


    // filter using swich case into 4 new arrays

    // switch(true) (
    //   case item.category === "Medical":
    //     newMedicalArray.push(item.name)
    //   case item.category === "Tools":
    //     newToolArray.push(item.name)
    //   case item.category === "Tech":
    //     newTechArray.push(item.name)
    //   case item.category === "Documents":
    //     newDocumentArray.push(item.name)
    //   )
    //
  }

  render() {

    //map through the 4 arrays i've built to create li elements
        // var newMedicalArray = [];
        // var newMedicalArray = [];
        // var newMedicalArray = [];
        // var newMedicalArray = [];

     var medicalList = newMedicalArray.map((item,index) => <li key={index}>{item}</li>)

      return (
        <div>
          <Grid fluid>
            <Row>
              <Col className="grey" sm={4}>
                <Col sm={12}>{medicalList}</Col>
              <Col className="grey" sm={4}>
                <Col sm={12}>{medicalList}</Col>
            </Row>
          </Grid>
        </div>
      )
    }

  }
}

export default Supplylist;
