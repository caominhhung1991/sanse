import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from './../../../store/actions/index';
import Header from '../../UI/Header/Header';
import classes from './../KhoaHoc.scss';

class KhoaHocDetails extends Component {
  static propTypes = {
  }

  render() {
    console.log(this.props.match.params.id)
    const id = this.props.match.params.id;
    let khoaHoc = {
      title: '',
      companies: [],
      courses: []
    };

    this.props.khoaHocs.map(kh => {
      if (kh.id === Number(id)) {
        khoaHoc = kh;
      }
    })


    return (
      <div>
        <Header />
        <div className="row">
          <div class="col-md-12">
            <div class="row box main-contents">
              <div class="col-md-3">
                <div class="course-img">
                  <img class="img-fluid" src="https://blog.instabug.com/wp-content/uploads/2018/03/Featured.jpg" alt="react" />
                </div>
                <br />
                <button class="btn-enroll">ENROLL</button>
              </div>

              <div class="col-md-9">
                <div class="course-title">
                  <h1>{khoaHoc.title}</h1>
                </div>
                <div class="course-description">
                  Learn how to conduct effective user research to better understand what users love, I Love Tieu Vi, hate, want and need. Learn
                  how to conduct effective user research to better understand what users love, hate, want and need.
                    </div>
                <div className={classes.Companies} style={{ marginTop: '15px' }}>
                  {khoaHoc.companies.map(company => {
                    return <span className={classes.Company} key={company}>{company}</span>
                  })}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="col-md-12 process-content box">
                <table class="course-process-info">
                  <tr>
                    <td class="icon-info">
                      <i class="far fa-clock"></i>
                    </td>
                    <td class="name-info">Length</td>
                    <td class="data-info">: 8 weeks</td>
                  </tr>
                  <tr>
                    <td class="icon-info">
                      <i class="far fa-chart-bar"></i>
                    </td>
                    <td class="name-info">Effort</td>
                    <td class="data-info">: 8-10 h/week</td>
                  </tr>
                  <tr>
                    <td class="icon-info">
                    </td>
                    <td class="name-info">Price</td>
                    <td class="data-info">: FREE</td>
                  </tr>
                  <tr>
                    <td class="icon-info">
                    </td>
                    <td class="name-info">Subject</td>
                    <td class="data-info">: Front-End</td>
                  </tr>
                  <tr>
                    <td class="icon-info">
                      <i class="fas fa-award"></i>
                    </td>
                    <td class="name-info">Level</td>
                    <td class="data-info">: Advanced</td>
                  </tr>
                  <tr>
                    <td class="icon-info">
                      <i class="fas fa-award"></i>
                    </td>
                    <td class="name-info">Require</td>
                    <td class="data-info">: HTML/CSS, Javascript</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="col-md-9">
              <div class="col-md-12 details-content box">
                <h2>About this course</h2>
                Mark Cuban, owner of the Dallas Mavericks, puts it bluntly: “No sales. No company.” Every organization needs effective marketing
                to match its products, services and experiences to customers, and maintain and grow its revenue. In this
                course you will learn the keys to successful marketing, from using traditional and digital media channels
                to build brand awareness, to using consumer and behavioral research in order to better match your product
                to your customers’ wants and needs. Kitokip say "Forever Young, be YOLO". <br /><br />
                <ul>
                  <li>Identify target customers and analyze and understand their needs and desires.</li>
                  <li>Define your offering's value proposition and positioning.</li>
                  <li>Identify the right target customer segment, and create a go-to-market strategy and integrated marketing campaign</li>
                  <li>Define key performance indicators and analyze the results.</li>
                </ul>

                By the end of this class, you will understand how to assess the competitive playing field, understand
                your competitor’s brand position, and map your own organization’s position, strengths, and weaknesses,
                to create or capture competitive advantages. <br /><br />

                <h2>What you'll learn</h2>
                <ul>
                  <li>Marketing methods to help you identify successful strategies and tactics</li>
                  <li>How to apply marketing frameworks to real-world business problems</li>
                  <li>How to create strategic, research-based marketing plans</li>
                  <li>How marketing skill sets support your role as a successful mananger/leader</li>
                </ul>

                <div className={classes.Courses}>
                  Các khoá cần phải hoàn thành:
                  <ol>
                    {khoaHoc.courses.map(course => {
                      const courseURL = '/khoahoc/'+course.id;
                      return (
                        <li key={course.title}>
                          <Link to={courseURL}>{course.title}</Link>
                        </li>
                      )
                    })}
                  </ol>

                </div>
              </div>

            </div>
          </div>
        </div>
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