import React from 'react';
import classesFormInput from './../../../static/sass/form-input.scss';
// import PropTypes from 'prop-types';


const propTypes = {

};


const DataSource = () => {
  return (
    <select className={classesFormInput.FormControl}>
      <option>Contact</option>
    </select>
  );
};


DataSource.propTypes = propTypes;


export default DataSource;
