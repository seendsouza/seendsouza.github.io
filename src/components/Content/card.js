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
  outputTags(propsTags) {
    var tags = [];
    var numberOfTags = propsTags.length;
    for (var i = 0; i < numberOfTags; i++) {
      tags.push(<Tag text={propsTags[i]} />);
    }
    return tags;
  }
  render() {
    var tagList = this.outputTags(this.props.tags);
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-2dp bg-white mx-4 mb-4">
        <img class="w-full" src={this.props.src} alt={this.props.alt} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{this.props.title}</div>
          <p class="text-gray-700 text-base">{this.props.description}</p>
        </div>
        <div class="px-6 py-4">{tagList}</div>
      </div>
    );
  }
}
