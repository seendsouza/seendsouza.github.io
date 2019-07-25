import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";

class RightLink extends React.Component {
  render() {
    return (
      <a
        href={this.props.href}
        class="block text-lg h-10 w-10 flex items-center justify-center leading-none border rounded-full text-white border-white hover:border-transparent hover:text-black opacity-75 hover:opacity-100 hover:bg-white lg:m-2 mt-4 mb-2 mx-2"
      >
        <FontAwesomeIcon icon={this.props.icon} />
      </a>
    );
  }
}

export default class RightLinks extends React.Component {
  render() {
    return (
      <div>
        <div class="flex flex-row justify-center lg:border-none border-t-2 opacity-75 border-white">
          <RightLink href="mailto:sdsou037@uottawa.ca" icon={faEnvelope} />
          <RightLink
            href="https://www.linkedin.com/in/sean-d-98131b125"
            icon={faLinkedin}
          />
          <RightLink href="https://github.com/seendsouza" icon={faGithub} />
          <RightLink href="https://gitlab.com/seendsouza" icon={faGitlab} />
        </div>
      </div>
    );
  }
}
