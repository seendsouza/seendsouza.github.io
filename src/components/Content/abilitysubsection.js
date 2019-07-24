import React from "react";

class Ability extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}, {this.props.rating}
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
        <h2>{this.props.title}</h2>
        <ul>{properties}</ul>
      </div>
    );
  }
}