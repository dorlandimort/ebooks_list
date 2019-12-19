import React, { useState, useEffect } from 'react';
import EbooksRepository from '../api/repositories/EbooksRepository';
import EbookSortTypes from '../constants/EbookSortTypes';
import EbookList from '../components/ebooks/EbookList';

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
    <div>
      <h2>Ebooks view</h2>
      <EbookList ebooks={ebooks} />
    </div>
  );
};

export default Ebooks;
