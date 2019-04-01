import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Content from './Content'
import header from './header1234.jpg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div id='container'>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column
              style={{
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                overflow: 'hidden'
              }}
            >
              <img
                src={header}
                alt='logo'
                style={{ width: '100%', display: 'block' }}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <div style={{ height: '500px' }}>
                <Content />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App
