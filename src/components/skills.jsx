import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import Jira from "../assets/jira.png";
import Mongodb from "../assets/mongodb.png";
import Nodejs from "../assets/nodejs.png";

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl font-bold font-serif my-8">Professional Skills</h2>
      <img src={Html} />
      <img src={Css} />
      <img src={Js} />
      <img src={Nodejs} />
      <img src={Jira} />
      <img src={Mongodb} />
    </section>
  );
}
