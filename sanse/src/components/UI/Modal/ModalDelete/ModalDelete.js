import React from 'react';
import PropTypes from 'prop-types';

import classes from './../../../../static/sass/form-input.scss';

const propTypes = {
  selectedWidget: PropTypes.object.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  deleting: PropTypes.func.isRequired
};

const ModalDelete = (props) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <button onClick={props.deleting} className={classes.ButtonDanger}>CANCEL</button>
    <button onClick={() => props.deleteWidget(props.selectedWidget)} className={classes.ButtonSuccess}>OK</button>
  </div>
);

ModalDelete.propTypes = propTypes;

export default ModalDelete;