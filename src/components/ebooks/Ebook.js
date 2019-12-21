import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../common/ProgressBar';
import TimeHelper from '../../util/TimeHelper';
import './ebook.css';
import checkedIcon from '../../assets/images/success.svg';
import moreIcon from '../../assets/images/more.svg';

const Ebook = ({ ebook }) => {
  return (
    <div className="flex-row-container ebook">
      <div className="width-30 container">
        <div className="cover-container">
          <img
            className="ebook-cover"
            src={ebook.cover_url}
            alt="ebook.title"
            loading="lazy"
          />
        </div>
      </div>
      <div className="info-container width-70 flex-column-container justify-items-start align-items-stretch">
        <div className="title-container margin-left-05 margin-right-05 flex-row-container align-items-center">
          <span className="ebook-title ellipsis text-left margin-right-05">
            <b>{ebook.title}</b>
          </span>
          <a href="javascript: void(0);">
            <span>
              <img src={moreIcon} alt="more" className="icon" />
            </span>
          </a>
        </div>
        <div className="authors-container flex-row-container align-items-start margin-left-05 margin-right-05">
          <span className="font-size-80">
            <b>{ebook.authors.join(' - ')}</b>
          </span>
        </div>
        <div className="narrators-container flex-row-container align-items-start margin-left-05 margin-right-05 margin-top-025">
          <span className="font-size-70 font-weight-200">
            {ebook.narrators.join(' - ')}
          </span>
        </div>
        <div className="progress-container margin-left-05 margin-right-05 margin-top-025 flex-row-container align-items-center">
          <span className="font-size-70 text-left">{ebook.progress}%</span>
          <ProgressBar
            className="margin-left-05"
            progress={ebook.progress}
            height="0.2em"
            color={ebook.progress === 100 ? '#00EDA7' : '#4AB6F3'}
          />
        </div>
        <div className="additional-info-container margin-left-05 margin-right-05 margin-top-025 flex-row-container">
          <div className="downloaded-container width-30 flex-row-container justify-items-start">
            {ebook.isDownloaded && (
              <div className="flex-row-container align-items-center">
                <img src={checkedIcon} alt={''} className="icon" />
                <span className="font-size-70 font-weight-200 margin-left-05">
                  Descargado
                </span>
              </div>
            )}
          </div>
          <div className="runtime-container width-70 flex-row-container align-items-center justify-items-end">
            <span className="font-size-70 font-weight-200">
              {ebook.progress === 100
                ? 'Terminado'
                : TimeHelper.toHourAndMinutes(ebook.runtime)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Ebook.propTypes = {
  ebook: PropTypes.object.isRequired
};

export default Ebook;
