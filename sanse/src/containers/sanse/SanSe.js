import React, { Component } from 'react';
import classes from './SanSe.scss';
import Map from '../../components/Map/Map';
import Header from '../../components/UI/Header/Header';
import KhoaHoc from '../../components/KhoaHoc/KhoaHoc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../store/actions/index';

class SanSe extends Component {
  state = {
    
  }

  showDetailHandle = (id) => {
    let khoaHocs = this.props.khoaHocs;
    for(let khoaHoc of khoaHocs) {
      if(khoaHoc.id === id) {
        khoaHoc.showDetail = !khoaHoc.showDetail;
      }
    }
    this.setState({
      khoaHocs: khoaHocs
    })
  }

  render() {
    return (
      <div className={classes.SanSe}>
        <Header />
        {this.props.khoaHocs.map(khoaHoc => {
          return <KhoaHoc 
            key={khoaHoc.id} 
            khoaHoc={khoaHoc}
            showDetailHandle={this.showDetailHandle} 
          />
        })}
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


export default connect(mapStateToProps, mapDispatchToProps)(SanSe);