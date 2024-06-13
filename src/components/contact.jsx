import React from "react";
import Button from "./button";

export default function Contact() {
  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
          Contact Me
        </h2>
        <form className="flex flex-col gap-y-4 px-4 sm:px-12">
          <label>
            <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
              Full Name
            </div>
            <input
              className="w-full border-2 rounded-full border-black h-14"
              type="text"
            />
          </label>
          <label>
            <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
              Email Address
            </div>
            <input
              className="w-full border-2 rounded-full border-black h-14"
              type="email"
            />
          </label>
          <label>
            <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
              Subject
            </div>
            <input
              className="w-full border-2 rounded-full border-black h-14"
              type="text"
            />
          </label>
          <label>
            <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
              Message
            </div>
            <textarea
              className="w-full border-2 rounded-3xl  border-black h-36"
              name=""
              id=""
            ></textarea>
          </label>
          <Button className="uppercase ml-auto mb-20">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
