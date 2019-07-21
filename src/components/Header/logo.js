import React from "react";
import logo from "../../logo.svg";

export default class Logo extends React.Component {
  render() {
    return (
      <div class="flex items-center flex-shrink-0 text-white mx-3 hover:opacity-75 justify-center">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width="54"
            height="54"
            viewBox="0 0 54 54"
          />
        </a>
      </div>
    );
  }
}
