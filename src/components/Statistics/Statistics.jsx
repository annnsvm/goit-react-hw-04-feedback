import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, feedbackPercentage }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>Good: {good}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Neutral: {neutral}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Bad: {bad}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Total feedback: {total}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Positive feedback: {feedbackPercentage}%</p>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
