import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../store/actions/index';
import Header from '../../UI/Header/Header';

class KhoaHocDetails extends Component {
  static propTypes = {
    // khoaHoc: PropTypes.object.isRequired,
  }

  render() {
    console.log(this.props.match.params.id)
    const id = this.props.match.params.id;

    this.props.khoaHocs.map(khoaHoc => {
      if(khoaHoc.id === Number(id)) {
        console.log(khoaHoc)
      }
    })
    return (
      <div>
        <Header />
        detail
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    khoaHocs: state.sanse.khoaHocs
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(KhoaHocDetails);