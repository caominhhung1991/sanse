import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './KhoaHoc.scss';

export default class KhoaHoc extends Component {
  static propTypes = {
    khoaHoc: PropTypes.object.isRequired,
    showDetailHandle: PropTypes.func.isRequired,
  }

  render() {
    let khoaHocClass = [classes.KhoaHoc];
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
              nội dung môn học
            </div>

            <button>Xem Chi Tiết</button>
            
          </section>) 
          : null}

        
      </div>
    )
  }
}
