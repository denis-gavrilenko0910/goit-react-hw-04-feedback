import { useState } from 'react';
import { Container } from './components/Container';
import { Section } from './components/Section';
import { Statistics } from './components/Statistics';
import { Notification } from './components/Notification';
import { FeedbackOptions } from './components/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = ['good', 'neutral', 'bad'];

  const handleIncrement = value => {
    switch (value) {
      case 'good':
        setGood(prevState => Number(prevState) + 1);
        break;
      case 'neutral':
        setNeutral(prevState => Number(prevState) + 1);
        break;
      case 'bad':
        setBad(prevState => Number(prevState) + 1);
        break;

      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    const value = good + neutral + bad;
    return value;
  };

  const positivePercentage = () => {
    let positivPercent = Math.round((good * 100) / total);
    return positivPercent;
  };
  const total = countTotalFeedback();

  const optionsAllStateData = Object.entries({ good, neutral, bad });
  return (
    <Container>
      <Section title="Leave your feedback, please!">
        <FeedbackOptions onLeaveFeedback={handleIncrement} buttons={buttons} />
      </Section>
      <Section title="Statistics">
        {total > 0 && (
          <Statistics
            optionsAllStateData={optionsAllStateData}
            total={countTotalFeedback()}
            positivPercent={positivePercentage()}
          />
        )}
        {!total > 0 && <Notification message="There are no feedbacks" />}
      </Section>
    </Container>
  );
};
