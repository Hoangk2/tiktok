import React from 'react';
import PropTypes from 'prop-types';
import './GlobeStyle.scss';

function GlobeStyle({ children }) {
  return React.Children.only(children);
}

GlobeStyle.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobeStyle;
