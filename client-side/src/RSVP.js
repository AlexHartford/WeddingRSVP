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
      error: false,
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
      'https://ln6hjusyb4.execute-api.us-east-2.amazonaws.com/dev/cards/update/' +
      this.state.code
    let req = Request('Put', fullUrl)
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
      .set('Access-Control-Allow-Origin', 'https://doraandalexwedding.com')
      .set('Access-Control-Allow-Credentials', true)
      .set(
        'Access-Control-Allow-Headers',
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent, Origin'
      )

      .then(res => {
        this.setState({
          buttonText: this.state.attending === 'Attending' ? 'Thank you! Your submission was successful' : 'Sorry you can\'t make it. Thanks for confirming!',
          error: false
        })
      })
      .catch(error => this.setState({ error: true }))
  }

  render () {
    const { code, guests, attending } = this.state

    return (
      <div>
        <Form size='large'>
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
          <Form.Field width={8}>
            <Input
              type='text'
              label='Email'
              name='email'
              width={6}
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Label pointing>
              A confirmation email will be sent within 24 hours. Email
              dkmc91396@outlook.com if not received
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
          {this.state.error && (
            <div>
              Please check your invitation for your code! If it continues to
              fail, please email dkmc91396@outlook.com or call Alex
              (847)912-1388
            </div>
          )}
        </Form>
      </div>
    )
  }
}
export default RSVP
