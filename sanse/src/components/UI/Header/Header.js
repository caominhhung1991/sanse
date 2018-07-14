import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../store/actions/index';
import classes from './Header.scss';

class Header extends Component {
	state = {

	}

	getLayoutClass = (layout) => {
		const LayOutClass = this.props.layout === layout ? [classes.Layout, classes.Active].join(' ') : [classes.Layout].join(' ');

		return LayOutClass;
	}


	render() {
		const AClass = this.getLayoutClass('A');
		const AAClass = this.getLayoutClass('AA');
		const AAAClass = this.getLayoutClass('AAA');
		const ABClass = this.getLayoutClass('AB');
		const BAClass = this.getLayoutClass('BA');
		const ABAClass = this.getLayoutClass('ABA');

		let login = (
			<span className={classes.header__login} onClick={this.props.openModalLogin}>
				<i className="fa fa-user-o"></i> Login
			</span>
		);

		let mode = <button onClick={this.props.changeViewMode}>Edit Mode</button>;
		let layoutView = null;

		if (this.props.authenticated === true) {
			if (this.props.viewMode === false) {
				mode = <button onClick={this.props.changeViewMode}>View Mode</button>;
				layoutView = (
					<div className={classes.header__layouts}>
						<div onClick={() => this.props.changeLayout('A')} className={AClass}>
							<span className={classes.Big}></span>
						</div>
						<div onClick={() => this.props.changeLayout('AA')} className={AAClass}>
							<span className={classes.Mid}></span>
							<span className={classes.Mid}></span>
						</div>
						<div onClick={() => this.props.changeLayout('BA')} className={BAClass}>
							<span className={classes.MotPhanBa}></span>
							<span className={classes.HaiPhanBa}></span>
						</div>
						<div onClick={() => this.props.changeLayout('AB')} className={ABClass}>
							<span className={classes.HaiPhanBa}></span>
							<span className={classes.MotPhanBa}></span>
						</div>
						<div onClick={() => this.props.changeLayout('AAA')} className={AAAClass}>
							<span className={classes.MotPhanBa}></span>
							<span className={classes.MotPhanBa}></span>
							<span className={classes.MotPhanBa}></span>
						</div>
						<div onClick={() => this.props.changeLayout('ABA')} className={ABAClass}>
							<span className={classes.MotPhanTu}></span>
							<span className={classes.Mid}></span>
							<span className={classes.MotPhanTu}></span>
						</div>
					</div>
				);
			}

			login = (
				<div className="">
					<span className={classes.header__login} onClick={this.props.changePanelAdmin}>
						<i className="fa fa-user-o"></i> Admin <i className="fa fa-sort-down" style={{ position: 'relative', top: '-3px' }}></i>
					</span>
					{
						this.props.panelAdmin ? (
							<div className={classes.header__mode}>
								{mode}
								<button onClick={this.props.logout}>Logout</button>
							</div>) : null
					}
				</div>
			);
		}

		return (
			<header className={classes.header}>
				<nav className={classes.header__navbarTop} key="navbarTop">
					<a><i className="fa fa-tachometer"></i> Dashboard</a>
					{login}
				</nav>
				<nav className={classes.header__navbarSecond} key="navbarSecond">
					<p className={classes.header__title}>Dashboard Title</p>
					{layoutView}
				</nav>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authenticated: state.dashboard.authenticated,
		viewMode: state.dashboard.viewMode,
		panelAdmin: state.dashboard.panelAdmin
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		openModalLogin: actions.openModalLogin,
		changeViewMode: actions.changeViewMode,
		changePanelAdmin: actions.changePanelAdmin,
		logout: actions.logout

	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);