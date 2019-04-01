import React, { Component } from 'react'
import { Grid, Segment, List } from 'semantic-ui-react'

class Hotel extends Component {
  render () {
    return (
      <List divided relaxed size='large'>
        <List.Item>
          <List.Content>
            <List.Header style={{ paddingBottom: '10px' }}>
              You can book a room in Timber Ridge Lodge and Waterpark with our
              link.{' '}
            </List.Header>
            <List.Header />
            <List.Description>
              <div style={{ paddingBottom: '10px' }}>
                It is a part of Grand Geneva Resort and Spa. Transportation will
                be provided to get to the ceremony/reception and back.
              </div>
              <div style={{ paddingBottom: '10px' }}>
                <a
                  href='https://res.windsurfercrs.com/ibe/details.aspx?propertyid=14141&nights=1&checkin=06/13/2019&group=77A3O9'
                  target='_blank'
                >
                  Book online
                </a>
              </div>
              <div style={{ paddingBottom: '10px' }}>Or</div>
              <div style={{ paddingBottom: '10px' }}>
                Call the Group Reservation number at (855)833-5345 and ask for
                the Kung & Hartford Wedding Block.
              </div>
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
  }
}

export default Hotel
