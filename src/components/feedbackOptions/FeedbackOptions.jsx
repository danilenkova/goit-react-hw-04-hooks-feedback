import PropTypes from "prop-types";
import { Feedback, FeedbackItem, Button } from "./FeedbackOptions.styled.jsx";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Feedback>
      {options.map((option) => (
        <FeedbackItem key={option}>
          <Button name={option} onClick={(e) => onLeaveFeedback(e.target.name)}>
            {option}
          </Button>
        </FeedbackItem>
      ))}
    </Feedback>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
