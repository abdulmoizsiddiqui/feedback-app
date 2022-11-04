import React from "react";
import PropTypes from "prop-types";

function Header({ props, bgColor, textColor }) {
  const headerStyles = {
    color: textColor,
    backgroundColor: bgColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">{props.text}</div>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedbackUI",
  bgColor: "rgba(0,0,0,0.4",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
