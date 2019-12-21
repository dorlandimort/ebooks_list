import React, { useState, useEffect } from 'react';
import EbooksRepository from '../api/repositories/EbooksRepository';
import EbookSortTypes from '../constants/EbookSortTypes';
import EbookList from '../components/ebooks/EbookList';
import sortIcon from '../assets/images/sort.svg';

const Ebooks = () => {
  const [ebooks, setEbooks] = useState([]);

  const fetchEbooks = () => {
    setEbooks(EbooksRepository.getAll());
  };

  const sortByTitle = () => {
    setEbooks(EbooksRepository.sortBy(EbookSortTypes.BY_TITLE));
  };

  const sortByLastPlayedDate = () => {
    setEbooks(EbooksRepository.sortBy(EbookSortTypes.BY_LAST_PLAYED_DATE));
  };

  const sortByPurchasedDate = () => {
    setEbooks(EbooksRepository.sortBy(EbookSortTypes.BY_PURCHASED_DATE));
  };

  useEffect(() => {
    fetchEbooks();
  });

  return (
    <div className="flex-column-container align-items-stretch">
      <div className="flex-row-container justify-items-center align-items-center border-bottom">
        <div style={{ width: '100%' }}>
          <h2 className="text-center">Audiolibros</h2>
        </div>
        <div style={{ width: '10%' }}>
          <span className="text-right">
            <img src={sortIcon} className="icon" />
          </span>
        </div>
      </div>
      <div className="margin-left-05 margin-right-05">
        <EbookList ebooks={ebooks} />
      </div>
    </div>
  );
};

export default Ebooks;
