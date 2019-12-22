import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({ show, children }) => {
  const modalShowHide = show ? 'display-block' : 'display-none';
  if (!show) {
    return null;
  }
  return (
    <div className={`modal ${modalShowHide}`}>
      <section className="modal-content border-radius-1">{children}</section>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool
};

Modal.defaultProps = {
  children: <div />,
  show: false
};

export default Modal;
