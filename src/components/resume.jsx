import React from "react";

export default function Resume() {
  return (
    <section>
      <h2>My Resume</h2>
      <div>
        <h3>Education</h3>
        <div>
          <h4>Name of Institution</h4>
          <div>
            <span>Program/Course</span>
            <span>Year</span>
            <p>Description</p>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <h3>Experience</h3>
        <div>
          <h4>Position</h4>
          <div>
            <span>Name of Company</span>
            <span>Year</span>
            <p>Description</p>
          </div>
        </div>
      </div>
    </section>
  );
}