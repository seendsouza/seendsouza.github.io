import React from "react";

class LeftLink extends React.Component {
  render() {
    return (
      <a
        href={this.props.href}
        class="block py-2 px-2 lg:py-0 lg:px-0 mx-3 lg:inline-block text-white font-semibold opacity-75 hover:opacity-100 hover:border-none lg:border-none border-t border-white"
      >
        {this.props.text}
      </a>
    );
  }
}

export default class LeftLinks extends React.Component {
  render() {
    return (
      <div class="text-md flex-grow mt-3 mb-1 lg:my-3">
        <LeftLink href="/" text="Resume" />
      </div>
    );
  }
}
