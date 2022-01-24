import { useState } from "react";
import Section from "./components/section";
import FeedbackOptions from "./components/feedbackOptions";
import Statistics from "./components/statistics";
import Notification from "./components/notification";

const options = ["good", "neutral", "bad"];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleChange = (name) => {
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };
  const total = good + neutral + bad;
  const positivePercentage = `${Math.round((good / total) * 100)}%`;
  const data = { good, neutral, bad, total, positivePercentage };
  return (
    <>
      <Section title="Please Leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics data={data} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
