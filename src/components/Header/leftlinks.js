import React from "react";

export default class LeftLinks extends React.Component {
  render() {
    return (
      <div class="text-md lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
        >
          Resume
        </a>

        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
        >
          Contact
        </a>
      </div>
    );
  }
}
