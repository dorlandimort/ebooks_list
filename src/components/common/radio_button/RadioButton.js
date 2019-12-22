import React from 'react';
import PropTypes from 'prop-types';

import './RadioButton.css';

const RadioButton = ({ id, checked, onChange, value, color, children }) => {
  return (
    <div>
      <input
        id={id}
        type="radio"
        className="radio-input"
        name="sortType"
        checked={checked}
        onChange={() => {
          onChange(value);
        }}
      />
      <label className="radio-label" htmlFor={id}>
        <svg
          className="svg"
          fill="currentColor"
          preserveAspectRatio="xMidYMid"
          height="30"
          width="30"
          viewBox="0 0 30 30"
        >
          <circle
            className="radio-outline"
            cx="15"
            cy="15"
            r="13"
            fill={color}
            fillOpacity="0.1"
          />
          <circle className="radio-dot" cx="15" cy="15" r="6" fill={color} />
        </svg>
        <span className="radioText margin-left-05">{children}</span>
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

RadioButton.defaultProps = {
  color: '#000'
};

export default RadioButton;
