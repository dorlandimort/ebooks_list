import React from 'react';
import PropTypes from 'prop-types';
import Ebook from '../ebook/Ebook';

const EbookList = ({ ebooks }) => {
  return (
    <div>
      {ebooks.map(ebook => {
        return <Ebook ebook={ebook} id={ebook.id} key={ebook.id} />;
      })}
    </div>
  );
};

EbookList.propTypes = {
  ebooks: PropTypes.array.isRequired
};

export default EbookList;
