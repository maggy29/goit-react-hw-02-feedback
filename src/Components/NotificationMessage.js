import React from "react";

function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.defaultProps = {
  message: "No feedback given",
};

export default Notification;
