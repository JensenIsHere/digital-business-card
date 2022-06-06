import React from "react";

export default function Info() {
  return (
    <div className="info--container">
      <h1>Image</h1>
      <h1 className="info--name">Jensen Ruud</h1>
      <h4 className="info--job">Full Stack Developer</h4>
      <h5 className="info--website">website.net</h5>
      <div className="info--button_container">
        <button className="info--button_email">Email</button>
        <button className="info--button_li">LinkedIn</button>
      </div>
    </div>
  );
}
