import React, { Component } from 'react';
import Section from './Section/Section';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

// const options = [
//   { id: 'id-1', label: 'Good', bgc: '#4de876' },
//   { id: 'id-2', label: 'Neutral', bgc: '#f0ee6c' },
//   { id: 'id-3', label: 'Bad', bgc: '#f03c3c' },
// ];

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const item = event.currentTarget.textContent;
    this.setState(prevState => {
      return { [item]: prevState[item] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const options = Object.keys(this.state);
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    );
  }
}
