import React from "react";
import PropTypes from "prop-types";

function FeedbackOptions({ onLeaveFeedback, options }) {
  const feedbackTypes = Object.keys(options);
  return (
    <div>
      {feedbackTypes.map((feedbackType) => (
        <button
          type="button"
          key={feedbackType}
          onClick={() => onLeaveFeedback(feedbackType)}
        >
          {feedbackType}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
