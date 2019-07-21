import React from "react";

export default class Sandwich extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isCollapsed: !state.isCollapsed
    }));
  }
  render() {
    return (
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
          onClick={this.handleClick}
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    );
  }
}
