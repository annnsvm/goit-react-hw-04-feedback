import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackClick = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const options = ['good', 'neutral', 'bad'];
  const feedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onFeedbackClick={onFeedbackClick}
          options={options}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            total={total}
            feedbackPercentage={feedbackPercentage}
            good={good}
            bad={bad}
            neutral={neutral}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};
