import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../../store/actions/index';
import classesFormInput from './../../../../static/sass/form-input.scss';

class ModalLogin extends Component {
  state = {
    username: '',
    password: '',
    inputValid: true
  }

  onSubmitHandle = (event) => {
    event.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      return null;
    }
    this.props.checkAuthorization(this.state.username, this.state.password);
    this.setState({
      ...this.state,
      inputValid: true
    });
  }

  onChangeHandle = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }


  render() {
    return (
      <form onSubmit={this.onSubmitHandle}>
        {this.props.authenticFailed ?
          <div className={classesFormInput.AlertError}>Authenticated Failded</div>
          : null
        }
        <div className={classesFormInput.FormGroup}>
          <input
            className={classesFormInput.FormControl}
            type="text"
            placeholder="Username"
            onChange={this.onChangeHandle}
            value={this.state.username}
            name="username"
            required
          />
        </div>
        <div className={classesFormInput.FormGroup}>
          <input
            className={classesFormInput.FormControl}
            type="password"
            placeholder="Password"
            onChange={this.onChangeHandle}
            value={this.state.password}
            name="password"
            required
          />
        </div>
        <div className={classesFormInput.FormGroup}>
          <input
            className={classesFormInput.ButtonLogin}
            type="submit"
            value="Login"
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.dashboard.authenticated,
    authenticFailed: state.dashboard.authenticFailed
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    checkAuthorization: actions.checkAuthorization
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);