import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <a
          href="/"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 mr-4"
        >
          Email
        </a>
        <a
          href="/"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 mr-4"
        >
          LinkedIn
        </a>
        <a
          href="/"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 mr-4"
        >
          GitHub
        </a>
        <a
          href="/"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
        >
          GitLab
        </a>
      </div>
    );
  }
}
