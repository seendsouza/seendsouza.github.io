import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Rating extends React.Component {
  render() {
    var outputRating = [];
    for (var i = this.props.value; i > 0; i--) {
      outputRating.push(
        <div class="inline-block text-blue-500">
          <FontAwesomeIcon icon={faStar} />
        </div>
      );
    }
    for (var j = 5 - this.props.value; j > 0; j--) {
      outputRating.push(
        <div class="inline-block text-blue-200">
          <FontAwesomeIcon icon={faStar} />
        </div>
      );
    }
    return <div>{outputRating}</div>;
  }
}

class Ability extends React.Component {
  render() {
    return (
      <div class="flex flex-row md:w-1/2 items-center justify-between px-4 py-1">
        <div>{this.props.name}</div>
        <Rating value={this.props.rating} />
      </div>
    );
  }
}

export default class AbilitySubsection extends React.Component {
  sortDict(unsortedProperties) {
    var sortedProperties = [];
    for (var i = 5; i > 0; i--) {
      sortedProperties.push(this.sortAlphabetically(unsortedProperties, i));
    }
    return sortedProperties;
  }
  sortAlphabetically(obj, n) {
    return obj
      .filter(property => property.rating === n)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((property, key) => (
        <Ability name={property.name} rating={property.rating} />
      ));
  }

  render() {
    var properties = this.sortDict(this.props.properties);
    return (
      <div>
        <h2 class="font-bold text-xl text-center py-4">{this.props.title}</h2>
        <ul class="flex flex-col md:flex-row md:flex-wrap m-2">{properties}</ul>
      </div>
    );
  }
}
