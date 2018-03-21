import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mernJwtAuth');


class Supplylist extends Component  {

  constructor() {
    super();
    this.state = {
      allSupply = [],
      medicalArray = [],
      toolArray = [],
      techArray = [],
      docArray = [],
    }
  }

  componentDidMount() {
    //call database using Axios. this route is set up in server.js
    //put all things in 1 big array -- allSupply[]
    axios.get('/api/supplylist').then(result => {
    this.setState({
      //we're getting the data sent from server.js
      allSupply: result.data
        })
      })


    let newGamesArray = Array.from(this.state.games)
      newGamesArray.push(newGame)
      this.setState({
      )}

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
