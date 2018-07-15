import React, { Component } from 'react';
import classes from './SanSe.scss';
import Map from '../../components/Map/Map';
import Header from '../../components/UI/Header/Header';
import KhoaHoc from '../../components/KhoaHoc/KhoaHoc';

export default class SanSe extends Component {

  state = {
    khoaHocs: [
      {
        id: 1,
        title: 'Front end courses',
        companies: ['KMS', 'GameLoft', 'FPT', 'Vietel'],
        showDetail: true,
        purpose: "This course is to practice what you learned from a Front-end Framework. You could choose a framework from React"
      }, {
        id: 2,
        title: 'Back end courses',
        companies: ['KMS', 'Vietel'],
        showDetail: false
      }
    ]
  }

  showDetailHandle = (id) => {
    let khoaHocs = this.state.khoaHocs;
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
        {this.state.khoaHocs.map(khoaHoc => {
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