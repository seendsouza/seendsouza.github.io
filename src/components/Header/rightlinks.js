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
        class="block text-lg h-10 w-10 flex items-center justify-center leading-none border rounded-full text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white m-2"
      >
        <FontAwesomeIcon icon={this.props.icon} />
      </a>
    );
  }
}

export default class RightLinks extends React.Component {
  render() {
    return (
      <div class="flex flex-row">
        <RightLink href="/" icon={faEnvelope} />
        <RightLink href="/" icon={faLinkedin} />
        <RightLink href="/" icon={faGithub} />
        <RightLink href="/" icon={faGitlab} />
      </div>
    );
  }
}
