import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../store/actions/index';
import classes from './User.scss';
import Header from '../UI/Header/Header';

class User extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* {this.props.user.username} */}
        <section>
          <div className={classes.User}>
            <div className={classes.UserInfo}>
              <div className={classes.UserTitle}>
                Thông tin học viên
              </div>
              <div className={classes.UserContent}>
                <div className={classes.UserContentTop}>
                  <div className={classes.UserImgWrap}>
                    <img className={classes.UserImg} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGyOO84s9g8QvO54IiQaZjyf31P38eXvBw7gpHp_RlTsFSM_Vq" alt="avatar" />
                  </div>
                  <div className={classes.UserInfoLeft}>
                    <ul>
                      <li>
                        <span className={classes.UserContentTitle}>Họ tên: </span>
                        <span className="">Trần Trung Nghĩa</span>
                      </li>
                      <li>
                        <span className={classes.UserContentTitle}>Email: </span>
                        <span className="">
                          <a href="/">nghiatran@gmail.com</a>
                        </span>
                      </li>
                      <li>
                        <span className={classes.UserContentTitle}>Địa chỉ: </span>
                        <span className="">Thành phố Hồ Chí Minh</span>
                      </li>
                      <li>
                        <span className={classes.UserContentTitle}>Điện thoại: </span>
                        <span>+84 4884884448</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.UserInfoBottom}>
              <div className={classes.UserInfo}>
                <div className={classes.UserTitle} >
                  Các chứng chỉ đã nhận
                </div>
                <div className={classes.UserContent}>
                  <div className={classes.TagName}>
                    <div className={classes.UserContentTitle}><span>Front-end</span></div>
                    <div className={classes.TagCourseTime}><span>Ngày cấp: 15/06/2018</span></div>
                  </div>
                  <div className={classes.TagName}>
                    <div className={classes.UserContentTitle}><span>Back-end KMS</span></div>
                    <div className={classes.TagCourseTime}><span>Ngày cấp: 18/06/2018</span></div>
                  </div>
                </div>
              </div>
              <div className={classes.UserInfo}>
                <div className={classes.UserTitle}>
                  Các khoá học chưa hoàn tất
                </div>
                <div className={classes.UserContent}>
                  <div className={classes.TagName}>
                    <div className={classes.UserContentTitle}><span>DevOps</span></div>
                    <div className={classes.TagCourseTime}><span>Ngày đăng ký: 12/04/2018</span></div>
                  </div>
                  <div className={classes.TagName}>
                    <div className={classes.UserContentTitle}><span>Business Analysis</span></div>
                    <div className={classes.TagCourseTime}><span>Ngày đăng ký: 03/06/2018</span></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    khoaHocs: state.sanse.khoaHocs,
    user: state.sanse.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(User);