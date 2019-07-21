import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";

class Badge extends React.Component {
  render() {
    return (
      <a
        href={this.props.href}
        class="block text-lg h-10 w-10 flex items-center justify-center leading-none border rounded-full text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white lg:m-2 mt-4 mb-2 mx-2"
      >
        <FontAwesomeIcon icon={this.props.icon} />
      </a>
    );
  }
}

export default class BadgeList extends React.Component {
  render() {
    return (
      <div>
        <div class="flex flex-row justify-center lg:border-none border-t-2 border-white">
          <Badge href="mailto:sdsou037@uottawa.ca" icon={faEnvelope} />
          <Badge
            href="https://www.linkedin.com/in/sean-d-98131b125"
            icon={faLinkedin}
          />
          <Badge href="https://github.com/seendsouza" icon={faGithub} />
          <Badge href="https://gitlab.com/seendsouza" icon={faGitlab} />
        </div>
      </div>
    );
  }
}
