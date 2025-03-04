import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import figma2 from "../assets/figma2.png";
import Mongodb from "../assets/mongodb.png";
import Nodejs from "../assets/nodejs.png";
import reactlogo from "../assets/reactlogo.png";
import firebaselogo from "../assets/firebaselogo.png";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-bold mt-24 mb-8 uppercase tracking-wider text-center">
        Professional Skills
      </h2>

      <div className="grid gap-y-8 sm:grid-cols-2 md:grid-cols-3 md:gap-y-20">
        <div className="text-center space-y-4">
          <img className="h-44 inline" src={Html} />
          <h3 className="text-xl font-bold uppercase tracking-wider">HTML</h3>
        </div>
        <div className="text-center space-y-4">
          <img className="h-44 inline" src={reactlogo} />
          <h3 className="text-xl font-bold uppercase tracking-wider">
            React.js
          </h3>
        </div>
        <div className="text-center space-y-4">
          <img className="h-44 inline" src={Js} />
          <h3 className="text-xl font-bold uppercase tracking-wider">
            JavaScript
          </h3>
        </div>
        <div className="text-center space-y-4">
          <img className="h-44 inline" src={Nodejs} />
          <h3 className="text-xl font-bold uppercase tracking-wider">NodeJs</h3>
        </div>
        <div className="text-center space-y-4">
          <img className="h-44 inline" src={firebaselogo} />
          <h3 className="text-xl font-bold uppercase tracking-wider">
            Firebase
          </h3>
        </div>
        <div className="text-center space-y-4">
          <img className="h-44 inline" src={Mongodb} />
          <h3 className="text-xl font-bold uppercase tracking-wider">
            MongoDB
          </h3>
        </div>
        <div className="text-center space-y-4">
          <img className="h-44 inline" src={figma2} />
          <h3 className="text-xl font-bold uppercase tracking-wider">Figma</h3>
        </div>
      </div>
    </section>
  );
}
