import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedbackClick }) => {
  return (
    <div className={css.buttonBox}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.button}
          onClick={() => onFeedbackClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
