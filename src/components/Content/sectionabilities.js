import React from "react";
import AbilitySubsection from "./abilitysubsection";

export default class SectionAbilities extends React.Component {
  constructor(props) {
    super(props);
    this.skills = [
      { name: "Python", rating: 5 },
      { name: "ReactJS", rating: 2 },
      { name: "Dart", rating: 4 },
      { name: "Flutter", rating: 2 },
      { name: "Sembast (noSQL)", rating: 5 },
      { name: "Javascript", rating: 1 },
      { name: "Websockets", rating: 2 },
      { name: "HTTP", rating: 3 },
      { name: "C++", rating: 2 },
      { name: "RTOS", rating: 2 },
      { name: "Distributed Systems", rating: 3 }
    ];
    this.languages = [
      { name: "English (native)", rating: 5 },
      { name: "French (DELF B2)", rating: 3 },
      { name: "Mandarin (learning)", rating: 1 }
    ];
    this.tools = [
      { name: "Mozilla Firefox", rating: 5 },
      { name: "Google Chrome", rating: 5 },
      { name: "MS Office", rating: 4 },
      { name: "vim", rating: 4 },
      { name: "emacs", rating: 3 },
      { name: "Adobe Premiere Pro", rating: 4 },
      { name: "Adobe Photoshop", rating: 4 },
      { name: "DaVinci Resolve", rating: 5 },
      { name: "Visual Studio Code", rating: 5 },
      { name: "git-cli", rating: 5 },
      { name: "GitKraken", rating: 4 },
      { name: "GitHub", rating: 5 },
      { name: "GitLab", rating: 5 },
      { name: "Atlassian / Jira", rating: 3 },
      { name: "Arch Linux", rating: 5 },
      { name: "Ubuntu", rating: 5 },
      { name: "Windows", rating: 4 },
      { name: "MacOS", rating: 4 }
    ];
  }
  render() {
    return (
      <div class="container mx-auto lg:w-1/2">
        <AbilitySubsection title="Skills" properties={this.skills} />
        <AbilitySubsection title="Languages" properties={this.languages} />
        <AbilitySubsection title="Tools" properties={this.tools} />
      </div>
    );
  }
}
