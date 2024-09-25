import React from "react";
import BlogCard from "./blog-card";
import Button from "./button";
import { ARTICLES } from "../data";

export default function Blog() {
  return (
    <section id="blog">
      <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
        Latest Articles
      </h2>
      <div className="p-8 gap-8 grid sm:grid-cols-2 md:grid-cols-3">
        {ARTICLES.map((article) => (
          <BlogCard
            title={article.title}
            description={article.description}
            image={article.image}
            slug={article.slug}
            date={article.date}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button>VIEW BLOG</Button>
      </div>
    </section>
  );
}
