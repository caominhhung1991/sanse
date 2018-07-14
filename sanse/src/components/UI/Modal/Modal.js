import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../store/actions/index';
import classes from './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/_Aux/_Aux';

class Modal extends Component {
  componentDidMount() {
  }
  render() {

    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <div className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          <div className={classes.Modal__Header}>
            {this.props.title}
          </div>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    cancelModalLogin: actions.cancelModalLogin
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);