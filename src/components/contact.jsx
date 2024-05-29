import React from "react";

export default function Contact() {
  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
          Contact Me
        </h2>
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
