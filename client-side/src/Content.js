import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import RSVP from "./RSVP";
import Gift from "./Gift";
import Hotel from "./Hotel";
import Photo from "./Photo";
export default class Content extends Component {
  state = { activeItem: "RSVP" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="RSVP"
              active={activeItem === "RSVP"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="hotel"
              active={activeItem === "hotel"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="giftRegistry"
              active={activeItem === "giftRegistry"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="photos"
              active={activeItem === "photos"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={14}>
          {this.state.activeItem === "RSVP" && <RSVP />}
          {this.state.activeItem === "hotel" && <Hotel />}
          {this.state.activeItem === "giftRegistry" && <Gift />}
          {this.state.activeItem === "photos" && <Photo />}
        </Grid.Column>
      </Grid>
    );
  }
}
