import React from "react";
import Blackwoman from "../assets/blackwoman.jpg";

export default function TestiCard() {
  return (
    <article className="border rounded-xl bg-white p-8 sm:w-96 space-y-8">
      <div className="flex justify-center">
        <img className="h-48 rounded-xl" src={Blackwoman} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        reiciendis laborum nulla aliquid quo dolores magnam
      </p>
      <div className="spa">
        <p className="font-bold text-black tracking-wider">Alfred Doh-Nani</p>
        <p>Company/Title</p>
      </div>
    </article>
  );
}
