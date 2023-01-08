import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ children }) => {
  return <section className="Section">{children}</section>;
};

export default Section;
