import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const headerStyles = {
    color: "white",
    backgroundColor: "green",
  };

  return <header style={headerStyles}>This is the {props.text} header</header>;
}

Header.defaultProps = {
  text: "FeedbackUI",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
