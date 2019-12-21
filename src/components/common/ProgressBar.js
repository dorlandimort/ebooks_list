import React from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = ({ progress, height, color, className }) => {
  return (
    <div className={`wrapper ${className}`}>
      <div className="progress-bar">
        <span
          className="progress-bar-fill"
          style={{ width: `${progress}%`, height, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  height: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  height: '1em',
  color: 'blue',
  className: '',
};

export default ProgressBar;
