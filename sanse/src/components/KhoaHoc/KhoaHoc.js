import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import classes from './KhoaHoc.scss';

export default class KhoaHoc extends Component {
  static propTypes = {
    khoaHoc: PropTypes.object.isRequired,
    showDetailHandle: PropTypes.func.isRequired,
  }

  // onStopPaganition = (event) => {
  //   event.stopPaganition();
  // }

  render() {
    let khoaHocClass = [classes.KhoaHoc];
    let url = "/khoahocs-details/" + this.props.khoaHoc.id;
    if (this.props.khoaHoc.showDetail) {
      khoaHocClass.push(classes.ShowDetail)
    }
    return (
      <div className={khoaHocClass.join(' ')}
        onClick={() => this.props.showDetailHandle(this.props.khoaHoc.id)}
      >
        <header>
          <div className={classes.Title}>{this.props.khoaHoc.title}</div>
          <div className={classes.Companies}>
            {this.props.khoaHoc.companies.map(company => {
              return <span className={classes.Company} key={company}>{company}</span>
            })}
          </div>
        </header>

        {this.props.khoaHoc.showDetail ? (
          <section>
            <div> 
              {this.props.khoaHoc.purpose}
            </div>

            <Link 
              className={classes.Link} 
              to={url}
            >Xem Chi Tiết</Link>
            
          </section>) 
          : null}
      </div>
    )
  }
}
