import React, { Component } from 'react';
import classes from './Header.scss';

class Header extends Component {
	state = {

	}

	render() {
		let login = (
			<span className={classes.header__login}>
				<i className="fa fa-user-o"></i> Hung
			</span>
		);


		return (
			<header className={classes.header}>
				<nav className={classes.header__navbarTop} key="navbarTop">
					<a><i className="fa fa-tachometer"></i> SanSe</a>
					{login}
				</nav>
			</header>
		);
	}
}

export default Header;