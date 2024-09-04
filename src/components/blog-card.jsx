import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function BlogCard(blog) {
  const { title, description, image, slug, date } = blog;
  return (
    <article className="bg-white rounded-xl p-8 space-y-4">
      <p className="font-semibold">{date}</p>
      <Link to={`/blog/posts/${slug}`}>
        <h2 className="font-bold capitalize text-2xl">{title}</h2>
      </Link>

      <p>{description}</p>
      <Link to={`/blog/posts/${slug}`}>
        {" "}
        <div className="flex items-center gap-2">
          <h4 className="font-semibold">Read more</h4>
          <FaArrowRight className="text-[#59A587]" />
        </div>
      </Link>

      <div className="flex justify-center">
        <Link to={`/blog/posts/${slug}`}>
          <img className="h-48 rounded-3xl" src={image} />
        </Link>
      </div>
    </article>
  );
}
