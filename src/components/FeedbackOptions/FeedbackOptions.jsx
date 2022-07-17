import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    // const options = ['good', 'neutral', 'bad'];
    return (
      <ul className={styles.options__list}>
        {options.map(option => (
          <li key={option.id} className={styles.options__item}>
            <button
              className={styles.options__btn}
              onClick={onLeaveFeedback}
              style={{ backgroundColor: option.bgc }}
            >
              {option.label.toLowerCase()}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      bgc: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
