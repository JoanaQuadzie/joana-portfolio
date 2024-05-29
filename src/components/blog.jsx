import React from "react";
import Rightarrow from "../assets/rightarrow.png";

export default function Blog() {
  return (
    <section>
      <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
        Latest Articles
      </h2>
      <div>
        <div>
          <h4>October 31 2024</h4>
          <h3>Title Of Article</h3>
          <p>Description</p>
          <a href="">Read More</a>
          <img src={Rightarrow} />
        </div>
      </div>
      <div>
        <button>View Blog</button>
      </div>
    </section>
  );
}
