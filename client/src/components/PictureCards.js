import React, {Component} from "react";
import { Container, Image, Card } from "semantic-ui-react";


class PictureCards extends Component {

  render() {
    console.log(this.props.cards);
    return (
      <Container>
      {this.props.cards.length>0 ? 
      (this.props.cards.map(image=> 
          <Card className="card-image-group" key={image.imdbID}>
            <Image
              alt={image.Title}
              src={image.Poster}
            />
      </Card> )
          )
          :
          (<Card />)
       }
      </Container>
    );
  }
}
export default PictureCards;
