import React, { Component } from 'react'
import {
  Button,
  Divider,
  Form,
  Label,
  Radio,
  Input,
  FormGroup
} from 'semantic-ui-react'
import * as Request from 'superagent'
import './RSVP.css'

class RSVP extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '',
      guests: [''],
      error: null,
      attending: 'NotAttending',
      buttonText: 'Submit',
      email: ''
    }

    // This binding is necessary to make `this` work in the callback
    this.addGuest = this.addGuest.bind(this)
    this.removeGuest = this.removeGuest.bind(this)
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    this.addCard()
    // var fullUrl =
    //   'https://ln6hjusyb4.execute-api.us-east-2.amazonaws.com/dev/cards' +
    //   this.state.code
    // let req = Request('Get', fullUrl)
    //   .send()
    //   .withCredentials()
    //   .set('Content-Type', 'application/json')
    //   .set('Access-Control-Allow-Origin', 'http://localhost:3000')
    //   .set('Access-Control-Allow-Credentials', true)
    //   .set(
    //     'Access-Control-Allow-Headers',
    //     'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent, Origin'
    //   )

    //   .then(response => {
    //     console.log(response)
    //     this.setState(response)
    //   })
    //   .catch(error => this.setState(error))
  }

  addGuest = () => {
    var guests = this.state.guests
    guests.push('')
    this.setState({ guests })
  }

  removeGuest (index) {
    var guests = this.state.guests
    guests.splice(index, 1)
    this.setState({ guests })
  }
  handleGuestNameChange (index, event) {
    var guests = this.state.guests
    guests[index] = event.target.value
    this.setState({ guests })
  }

  addCard = () => {
    var fullUrl =
      'https://ln6hjusyb4.execute-api.us-east-2.amazonaws.com/dev/cards/create'
    let req = Request('Post', fullUrl)
      .send({
        code: this.state.code,
        names: this.state.attending === 'Attending' ? this.state.guests : [],
        rsvp: true,
        email: this.state.email,
        numGuests:
          this.state.attending === 'Attending' ? this.state.guests.length : 0,
        attending: this.state.attending === 'Attending'
      })
      .withCredentials()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Access-Control-Allow-Credentials', true)
      .set(
        'Access-Control-Allow-Headers',
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent, Origin'
      )

      .then(res => {
        this.setState({ buttonText: 'Thank you!' })
      })
      .catch(error => this.setState({ error }))
  }

  render () {
    const { code, guests, attending } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit} size='large'>
          <Form.Field inline>
            <Input
              type='text'
              label='Code'
              name='code'
              value={code}
              width={6}
              onChange={this.handleChange}
            />
            <Label pointing='left'>
              You can find your 4 digit code on your invitation
            </Label>
          </Form.Field>
          <Form.Field inline>
            <Input
              type='text'
              label='Email'
              name='email'
              width={8}
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Label pointing='left'>
              A confirmation email will be sent within 24 hours. Email
              dkmc91396@outlook.com if not receive
            </Label>
          </Form.Field>

          <Form.Field>
            <Radio
              label='Not Attending'
              name='attending'
              value='NotAttending'
              checked={this.state.attending === 'NotAttending'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Attending'
              name='attending'
              value='Attending'
              checked={this.state.attending === 'Attending'}
              onChange={this.handleChange}
            />
          </Form.Field>
          {attending === 'Attending' &&
            guests.map((x, i) => (
              <FormGroup key={'formGroup' + i} inline>
                <div key={'guest' + i}>
                  <Input
                    className='guestName'
                    key={i}
                    value={x.name}
                    width={6}
                    placeholder='Guest Name'
                    onChange={event => this.handleGuestNameChange(i, event)}
                  />
                  <Button key='plus button' onClick={this.addGuest}>
                    <i key='plus' className='plus circle icon' />
                  </Button>
                  <Button
                    key='minus button'
                    onClick={() => this.removeGuest(i)}
                  >
                    <i key='minus' className='minus circle icon' />
                  </Button>
                </div>
              </FormGroup>
            ))}
          <div />
          <Form.Button
            content={this.state.buttonText}
            onClick={this.handleSubmit}
          />
        </Form>
      </div>
    )
  }
}
export default RSVP
