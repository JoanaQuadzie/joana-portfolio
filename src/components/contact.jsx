import React, { useState } from "react";
import Button from "./button";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact">
      <div>
        <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
          Contact Me
        </h2>
        <form className="flex justify-center items-center flex-col gap-y-4 px-4 sm:px-12">
          <label>
            <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
              Full Name
            </div>
            <input
              required
              onChange={(event) => {
                setFullName(event.target.value);
              }}
              className="w-[450px] border-2 rounded-full h-14 p-8"
              type="text"
            />
          </label>
          <label>
            <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
              Email Address
            </div>
            <input
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-[450px] border-2 rounded-full h-14 p-8"
              type="email"
            />
          </label>
          <label>
            <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
              Subject
            </div>
            <input
              required
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              className="w-[450px] border-2 rounded-full h-14 p-8"
              type="text"
            />
          </label>
          <label>
            <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
              Message
            </div>
            <textarea
              required
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className="w-[450px] border-2 rounded-3xl h-44 p-8"
              name=""
              id=""
            ></textarea>
          </label>
        </form>
        <div className="flex justify-center">
          <a
            href={`mailto:joanaq03@gmail.com?subject=${subject}&body=${
              message + "\n" + "(" + fullName + ")"
            }&from=${email}`}
          >
            <Button className="uppercase mt-6 mb-20 hover:bg-green-900 hover:text-white">
              Send Message
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
