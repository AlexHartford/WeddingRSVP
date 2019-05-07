import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Grid, Image } from "semantic-ui-react";

class Photo extends Component {
  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    const images = this.importAll(
      require.context("./photos", false, /\.(png|jpe?g|svg)$/)
    );
    console.log(images);
    const CardExampleColumnCount = () => (
      <Grid.Column width={4}>
        {images.map(x => (
          <Image src={x} />
        ))}
      </Grid.Column>
    );
    return <CardExampleColumnCount />;
  }
}

export default Photo;
