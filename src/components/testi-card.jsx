import React from "react";
import Alfred from "../assets/alfred.jpg";

export default function TestiCard() {
  return (
    <article className="border rounded-xl bg-white p-8 space-y-8">
      <div className="flex justify-center">
        <img className="h-40 rounded-xl" src={Alfred} />
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
