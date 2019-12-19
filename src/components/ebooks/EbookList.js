import React from 'react';
import PropTypes from 'prop-types';
import Ebook from './Ebook';

const EbookList = ({ ebooks }) => {
  return (
    <div>
      <h2>Ebook list component</h2>
      <ul>
        {ebooks.map(ebook => {
          return (
            <li>
              <Ebook ebook={ebook} id={ebook.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

EbookList.propTypes = {
  ebooks: PropTypes.array.isRequired
};

export default EbookList;
