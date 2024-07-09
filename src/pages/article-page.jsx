import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ArticlePage = () => {
  const { slug } = useParams(); // slug -> my-journey-into-tech
  const [markdown, setMarkdown] = useState(); //markdown -> content of my-journey-into-tech.md file

  useEffect(() => {
    fetch(`/articles/${slug}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  if (!markdown) return <p>Loading...</p>;

  return (
    <div className="max-w-prose prose container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default ArticlePage;
