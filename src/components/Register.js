import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import userService from 'services/User'

class Register extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      userName: '',
      password: '',
      about: ''
    }
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  async handleSubmit (event) {
    event.preventDefault()
    await userService.register(this.state)
    this.context.router.history.push('/')
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <form className="form-signin bg-light border rounded p-5 col-sm-6"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <h2 className="form-signin-heading">Register</h2>
            <hr/>
            <label htmlFor="inputUser" className="sr-only">User Name</label>
            <input
              type="text"
              id="inputUser"
              className="form-control my-2"
              placeholder="UserName"
              required
              autoFocus
              value={this.state.userName}
              onChange={(event) => {
                this.setState({
                  userName: event.target.value
                })
              }}
            />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control my-2"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={(event) => {
                this.setState({
                  password: event.target.value
                })
              }}
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">
              <i className="fa fa-user-plus"></i> Register
            </button>
          </form>
        </div>
        <div className="row justify-content-md-center">
          <Link to="/login">Already registered? Log In</Link>
        </div>
      </div>
    )
  }
}

export default Register