import React from "react";

class Tag extends React.Component {
  render() {
    return (
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #{this.props.text}
      </span>
    );
  }
}

export default class Card extends React.Component {
  render() {
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-2dp bg-white m-3">
        <img class="w-full" src={this.props.src} alt={this.props.alt} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{this.props.title}</div>
          <p class="text-gray-700 text-base">{this.props.description}</p>
        </div>
        <div class="px-6 py-4">
          <Tag text={this.props.tags[0]} />
          <Tag text={this.props.tags[1]} />
          <Tag text={this.props.tags[2]} />
        </div>
      </div>
    );
  }
}
