import React from "react";
import LeftLinks from "./leftlinks";
import Logo from "./logo";
import RightLinks from "./rightlinks";
import Sandwich from "./sandwich";

export default class Header extends React.Component {
  render() {
    return (
      <nav class="flex items-center absolute justify-between flex-wrap bg-transparent w-full p-3">
        <Logo />
        <Sandwich />
        <div
          class={
            "w-full block flex-grow lg:flex lg:items-center justify-between lg:w-auto"
          }
        >
          <LeftLinks />
          <RightLinks />
        </div>
      </nav>
    );
  }
}
