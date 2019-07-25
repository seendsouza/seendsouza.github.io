import React from "react";
import logo from "../../assets/logo.svg";

export default class Logo extends React.Component {
  render() {
    return (
      <div class="flex flex-shrink-0 items-center justify-center text-white mx-3 opacity-75 hover:opacity-100 ">
        <a class="font-display headline5" href="/">
          <img
            src={logo}
            alt="logo"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          />
        </a>
      </div>
    );
  }
}
