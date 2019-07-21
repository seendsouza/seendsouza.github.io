import React from "react";

class LeftLink extends React.Component {
  render() {
    return (
      <a
        href={this.props.href}
        class="block py-2 px-2 lg:py-0 lg:px-0 mx-3 lg:inline-block text-white hover:text-blue-200 hover:border-none lg:border-none border-t border-blue-200"
      >
        {this.props.text}
      </a>
    );
  }
}

export default class LeftLinks extends React.Component {
  render() {
    return (
      <div class="text-md flex-grow my-3">
        <LeftLink href="/" text="Resume" />
        <LeftLink href="/" text="Contact" />
      </div>
    );
  }
}
