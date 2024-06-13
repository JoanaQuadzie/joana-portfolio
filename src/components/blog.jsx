import React from "react";
import Rightarrow from "../assets/rightarrow.png";
import BlogCard from "./blog-card";
import Button from "./button";

export default function Blog() {
  return (
    <section>
      <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
        Latest Articles
      </h2>
      <div className="p-8 gap-8 grid sm:grid-cols-2 md:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center mt-10">
        <Button>VIEW BLOG</Button>
      </div>
    </section>
  );
}
