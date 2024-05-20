import React from "react";

export default function Contact() {
  return (
    <section>
      <div>
        <h2>Contact Me</h2>
        <form>
          <label>
            Full Name
            <input type="text" />
          </label>
          <label>
            Email Address
            <input type="email" />
          </label>
          <label>
            Subject
            <input type="text" />
          </label>
          <label>
            Message
            <textarea name="" id=""></textarea>
          </label>
        </form>
      </div>
    </section>
  );
}
