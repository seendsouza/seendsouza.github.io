import React from "react";
import SectionIntro from "./sectionintro";
import SectionProjects from "./sectionprojects";

export default class Content extends React.Component {
  render() {
    return (
      <div class="w-full">
        <SectionIntro />
        <SectionProjects />
      </div>
    );
  }
}
