import React from "react";
import Card from "./card";
import Card0 from "../../assets/sectionintro.jpg";
import Card1 from "../../assets/sectionintro.jpg";
import Card2 from "../../assets/sectionintro.jpg";

export default class SectionProjects extends React.Component {
  render() {
    return (
      <div class="bg-red-600">
        <h2 class="flex flex-row justify-center text-xl font-bold py-3">
          Projects
        </h2>
        <div class="flex flex-col lg:flex-row items-center justify-center">
          <Card
            title="vscout"
            description="vscout is an open source software suite attempting to simplify and enhance scouting for all robotics teams. This can help teams pick alliance partners, generate strategies against opponents, and know this information in real time."
            alt="vscout open source scouting software suite"
            src={Card0}
            tags={["flutter", "nosql", "distributed"]}
          />
          <Card
            title="SEAN - York U Hacks 2018"
            description="The Sophisticated Educational Assistant Network (SEAN) was created with the mission to create global solidarity in making the world a better place. We do this through our service: by pairing citizens of developed countries to citizens of developing countries."
            alt="Sophissticated Educational Assistant Network (SEAN)"
            src={Card1}
            tags={["reactjs", "firebase", "nlp"]}
          />
          <Card
            title="2381C-V2"
            description="2381C 2018-19's Turning Point code using the PROS library in C++. It includes motion profiling for the autonomous period with PIDs on heading, left drive wheels, and right drive wheels. Points from a Cartesian plane of the field and velocity information are its inputs."
            alt="VEX Robotics Competition Code"
            src={Card2}
            tags={["rtos", "robotics", "cpp"]}
          />
        </div>
      </div>
    );
  }
}
