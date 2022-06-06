import React from "react";
import portrait from "../images/faceless_man.png";
import logo_email from "../images/mail.svg";
import logo_li from "../images/li.svg";

export default function Info() {
  return (
    <div className="info--container">
      <img
        className="info--portrait"
        src={portrait}
        alt="Picture of anonymous person"
      ></img>
      <h1 className="info--name">Jensen Ruud</h1>
      <h4 className="info--job">Full Stack Developer</h4>
      <h5 className="info--website">website.net</h5>
      <div className="info--button_container">
        <button className="info--button_email">
          <img src={logo_email} alt=""></img>
          Email
        </button>
        <button className="info--button_li">
          <img src={logo_li} alt=""></img>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
