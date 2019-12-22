import React, { useState, useEffect } from 'react';
import Modal from '../components/common/modal/Modal';
import Loading from '../components/common/loading/Loading';
import EbooksRepository from '../api/repositories/EbooksRepository';
import EbookSortTypes from '../constants/EbookSortTypes';
import EbookList from '../components/ebooks/ebooks_list/EbookList';
import RadioButton from '../components/common/radio_button/RadioButton';
import sortIcon from '../assets/images/sort.svg';

const Ebooks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ebooks, setEbooks] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  const [currentSortType, setCurrentSortType] = useState(
    EbookSortTypes.BY_TITLE
  );

  const sortEbooks = async () => {
    setIsLoading(true);
    setEbooks(await EbooksRepository.sortBy(currentSortType));
    setIsLoading(false);
  };

  const toggleModal = () => {
    setIsModalShown(!isModalShown);
  };

  const handleSort = async sortType => {
    setCurrentSortType(sortType);
    toggleModal();
    await sortEbooks(sortType);
  };

  useEffect(() => {
    sortEbooks().then();
  }, []);

  useEffect(() => {
    if (isModalShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalShown]);

  return (
    <div>
      <div className="flex-column-container align-items-stretch">
        <div
          className="flex-row-container justify-items-center
            align-items-center border-bottom"
        >
          <div style={{ width: '100%' }}>
            <h2 className="text-center">Audiolibros</h2>
          </div>
          <div style={{ width: '10%' }}>
            <span className="text-right" onClick={toggleModal}>
              <img src={sortIcon} className="icon" alt="sort" />
            </span>
          </div>
        </div>
        <div className="margin-left-05 margin-right-05">
          <EbookList ebooks={ebooks} />
        </div>
      </div>
      <Modal show={isModalShown}>
        <div
          className="flex-column-container justify-items-center
          align-items-center margin-left-1 margin-right-1 margin-top-5"
        >
          <div
            className="flex-row-container justify-items-center
            align-items-start"
          >
            <span className="swipe-down overline">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div className="flex-row-container align-items-stretch width-90">
            <div>
              <span className="font-size-80 font-weight-300">Ordenar por</span>
            </div>
          </div>
          <div className="flex-column-container width-90">
            {Object.keys(EbookSortTypes).map(sortTypeKey => {
              const sortType = EbookSortTypes[sortTypeKey];
              return (
                <div className="margin-top-2em" key={sortTypeKey}>
                  <RadioButton
                    value={sortType}
                    onChange={handleSort}
                    id={`radio-sort-${sortType.field}`}
                    checked={sortType === currentSortType}
                  >
                    {sortType.label}
                  </RadioButton>
                </div>
              );
            })}
          </div>
          <div
            className="flex-row-container align-items-center
            justify-items-center width-90 margin-top-2em"
          >
            <button
              type="button"
              className="button-info width-100"
              onClick={toggleModal}
            >
              <b>Cancelar</b>
            </button>
          </div>
        </div>
      </Modal>
      {isLoading && <Loading />}
    </div>
  );
};

export default Ebooks;
