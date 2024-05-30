import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Blog1 from "../assets/blog1.jpg";

export default function BlogCard() {
  return (
    <article className="bg-white rounded-xl p-8 space-y-4">
      <p className="font-semibold">JUNE 10, 2024</p>
      <h2 className="font-bold capitalize text-2xl">Blog Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur a
        beatae culpa nobis
      </p>
      <div className="flex items-center gap-2">
        <h4 className="font-semibold">Read more</h4>
        <FaArrowRight className="text-[#59A587]" />
      </div>
      <div className="flex justify-center">
        <img className="h-64 rounded-3xl" src={Blog1} />
      </div>
    </article>
  );
}
