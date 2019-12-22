import React from 'react';
import PropTypes from 'prop-types';
import { DisappearedLoading } from 'react-loadingg';

import '../modal/Modal.css';

const Loading = ({ color, size }) => {
  return (
    <div className="loading modal">
      <DisappearedLoading color={color} size={size} />
    </div>
  );
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

Loading.defaultProps = {
  color: '#00EDA7',
  size: 'default'
};

export default Loading;
