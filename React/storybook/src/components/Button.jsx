//Button.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
export const Button = ({ backgroundColor, size, label, ...props }) => {
  return (
    <div>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`].join(" ")}
        id="button"
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};
Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};