import React, { Component } from "react";
import API from "../utils/API";
import PictureCards from "../components/PictureCards";
import {
  Container,
  Header,
  Icon,
  Grid,
  Message,
} from "semantic-ui-react";


class Home extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0,
    cards:[]
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadPictures();
  }

  handleImageClick = event => {

    // const btnType = event.target.attributes.getNamedItem("data-value").value;
    // // Clone this.state to the newState object
    // // We'll modify this object and use it to set our component's state
    // const newState = { ...this.state };

    // if (btnType === "pick") {
    //   // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
    //   newState.match = 1 === Math.floor(Math.random() * 5) + 1;

    //   // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
    //   newState.matchCount = newState.match
    //     ? newState.matchCount + 1
    //     : newState.matchCount;
    // } else {
    //   // If we thumbs down'ed the dog, we haven't matched with it
    //   newState.match = false;
    // }
    // Replace our component's state with newState, load the next dog image
    // this.setState(newState);
    // this.loadPictures();
  };

  loadPictures = () => {
    API.getPicture()
      .then(res =>{
        this.setState({
          cards: res.data.Search
        })
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div> 
        <Container fluid>
          <Grid.Row>
            <Grid.Column>
              <Message>
                <Header as="h1" color="orange" textAlign="left">
                  <Icon name="lightbulb" circular />Click- / -Clack |- React!
                </Header>
              </Message>
            </Grid.Column>
          </Grid.Row>
          </Container>
          <Container>
        <PictureCards 
         cards={this.state.cards} handleImageClick={this.handleImageClick}/>
        </Container>
      </div>
    );
  }
}

export default Home;
