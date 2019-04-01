import React, { Component } from 'react'
import { Grid, Segment, List } from 'semantic-ui-react'

class Gift extends Component {
  render () {
    return (
      <List divided relaxed size='large'>
        <List.Item>
          <List.Content>
            <List.Header>Crate and Barrel</List.Header>
            <List.Description>
              <a
                href='https://www.crateandbarrel.com/gift-registry/dora-kung-and-alex-hartford/r5933919'
                target='_blank'
              >
                View Registry
              </a>
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>Williams Sonoma</List.Header>
            <List.Description as='a'>
              <a
                href='https://www.williams-sonoma.com/registry/7pbq6q9pmw/registry-list.html'
                target='_blank'
              >
                View Registry
              </a>
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
  }
}

export default Gift
