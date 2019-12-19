import React from 'react';
import PropTypes from 'prop-types';

const Ebook = ({ ebook }) => {
  return <h2>Ebook component ({ebook.title})</h2>;
};

Ebook.propTypes = {
  ebook: PropTypes.object.isRequired
};

export default Ebook;
