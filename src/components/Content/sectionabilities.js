import React from "react";
import AbilitySubsection from "./abilitysubsection";

export default class SectionAbilities extends React.Component {
  constructor(props) {
    super(props);
    this.skills = [
      {name : "Python", rating : 5}, {name : "ReactJS", rating : 5},
      {name : "Javascript (ES10)", rating : 5}, {name : "Dart", rating : 3},
      {name : "Flutter", rating : 3}, {name : "Websockets", rating : 2},
      {name : "HTTP", rating : 4}, {name : "C++", rating : 2},
      {name : "RTOS", rating : 2}, {name : "NoSQL", rating : 3},
      {name : "Redux", rating : 4}, {name : "Java", rating : 1},
      {name : "Haskell", rating : 1}, {name : "Ruby", rating : 3},
      {name : "Rails", rating : 2}, {}
    ];
    this.languages = [
      {name : "English (native)", rating : 5},
      {name : "French (DELF B2)", rating : 3},
      {name : "Mandarin (learning)", rating : 1}
    ];
    this.tools = [
      {name : "Mozilla Firefox", rating : 5},
      {name : "Google Chrome", rating : 5}, {name : "MS Office", rating : 4},
      {name : "vim", rating : 5}, {name : "Adobe Premiere Pro", rating : 4},
      {name : "Adobe Photoshop", rating : 4},
      {name : "DaVinci Resolve", rating : 5},
      {name : "Visual Studio Code", rating : 5}, {name : "git", rating : 5},
      {name : "GitKraken", rating : 4}, {name : "GitHub", rating : 5},
      {name : "GitLab", rating : 5}, {name : "Bitbucket + Jira", rating : 3},
      {name : "Arch Linux", rating : 5}, {name : "Ubuntu", rating : 5},
      {name : "Windows", rating : 4}, {name : "MacOS", rating : 4}
    ];
  }
  render() {
    return (
        <div class = "container mx-auto lg:w-1/2 py-4">
        <AbilitySubsection title = "Skills" properties =
         {
           this.skills
         } />
        <AbilitySubsection title="Languages" properties={this.languages} />
        <AbilitySubsection title =
             "Tools" properties = { this.tools } />
      </div>);
  }
}
