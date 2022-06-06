import React from "react";
import logo_twitter from "../images/twitter_icon.svg";
import logo_facebook from "../images/facebook_icon.svg";
import logo_instagram from "../images/instagram_icon.svg";
import logo_github from "../images/github_icon.svg";

export default function Footer() {
  return (
    <footer className="footer--container">
      <img src={logo_twitter}></img>
      <img src={logo_facebook}></img>
      <img src={logo_instagram}></img>
      <img src={logo_github}></img>
    </footer>
  );
}
