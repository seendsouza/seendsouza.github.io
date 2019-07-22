import React from "react";
import BadgeList from "./badgelist";

export default class Header extends React.Component {
  render() {
    return (
      <footer class="bg-blue-500 p-3 bottom-0 fixed w-full">
        <BadgeList />
        <div class="justify-center items-center ">
          <p class="flex flex-row justify-center text-white">
            Copyright © Sean D'Souza 2019
          </p>
        </div>
      </footer>
    );
  }
}
