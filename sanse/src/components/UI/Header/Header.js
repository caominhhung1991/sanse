import React, { Component } from 'react';
import SanSeLogo from './../../../static/img/sanse.png';
import { Link } from 'react-router-dom';
import classes from './Header.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../store/actions/index';

class Header extends Component {
	state = {

	}

	render() {
		let login = (
			<span className={classes.header__login}>
				<Link to="/user" className={classes.Link}><i className="fa fa-user-o"></i> {this.props.user.username}</Link>
			</span>
		);


		return (
			<header className={classes.header}>
				<nav className={classes.header__navbarTop} key="navbarTop">
					<Link to="/" className={classes.Link} ><img className={classes.SanSeLogo} src={SanSeLogo} /> SanSe</Link>
					{login}
				</nav>
			</header>
		);
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


export default connect(mapStateToProps, mapDispatchToProps)(Header);