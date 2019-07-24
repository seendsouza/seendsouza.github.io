import React from "react";
import Background from "../../assets/sectionintro.jpg";

export default class SectionIntro extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${Background})` }}
        class="flex flex-1 block justify-center items-center bg-fixed bg-center bg-cover h-screen"
      >
        <div class="block">
          <h4 class="text-center text-white font-mono">Hey, I'm</h4>
          <h1 class="text-center text-white text-xl font-semibold font-mono">
            Sean D'Souza
          </h1>
        </div>
      </div>
    );
  }
}
