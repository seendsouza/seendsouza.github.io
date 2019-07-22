import React from "react";
import Background from "../../assets/sectionintro.jpg";

export default class SectionIntro extends React.Component {
  render() {
    return (
      <div
        class="flex flex-col justify-center items-center bg-scroll bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div class="container mx-auto py-48">
          <h4 class="text-center text-white font-mono">Hey, I'm</h4>
          <h1 class="text-center text-white text-xl font-semibold font-mono">
            Sean D'Souza
          </h1>
        </div>
      </div>
    );
  }
}
