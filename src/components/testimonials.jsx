import React from "react";
import TestiCard from "./testi-card";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div>
        <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
          testimonials
        </h2>
      </div>
      <div className="px-8 gap-10  ">
        <TestiCard />
      </div>
    </section>
  );
}
