import React from "react";
import PropTypes from "prop-types";

function Statistics(props) {
  const { good, neutral, bad, total, positiveFeedbackPercentage } = props;
  return (
    <section>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </section>
  );
}

Statistics.defaultProps = {
  positiveFeedbackPercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};

export default Statistics;
