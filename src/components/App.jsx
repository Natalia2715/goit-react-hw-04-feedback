import { useState } from 'react';
import Section from './Section/Section';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const onLeaveFeedback = event => {
    const item = event.currentTarget.textContent;

    switch (item) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const options = [
    { id: 'id-1', label: 'Good', bgc: '#4de876' },
    { id: 'id-2', label: 'Neutral', bgc: '#f0ee6c' },
    { id: 'id-3', label: 'Bad', bgc: '#f03c3c' },
  ];
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={onLeaveFeedback}
      ></FeedbackOptions>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Section>
  );
}
