import React from "react";

import Recom from "../assets/recom.png";

export default function TestiCard() {
  return (
    <article className="border rounded-xl bg-white p-8 space-y-8">
      <div className="flex justify-center">
        <img className="h-40 rounded-xl" src={Recom} />
      </div>
      <p>
        I had the pleasure of teaching Joana during the GROW Web Developer
        Cohort 1 program, and I was thoroughly impressed by her determination,
        adaptability, and dedication to learning, especially given that she
        didn’t have a tech background to start with. Joana’s willingness to step
        out of her comfort zone and tackle something new was truly inspiring.
        She approached every concept — even the most technical or unfamiliar
        ones — with an open mind and a positive attitude. What stood out most
        was her exceptional perseverance; she was never discouraged by the steep
        learning curve. Instead, Joana took the time to truly understand the
        material, asking insightful questions and going above and beyond to
        apply what she learned. Her ability to absorb complex topics and make
        steady progress, despite the challenges, speaks volumes about her
        resilience and commitment to personal growth. Joana’s work ethic and
        determination are admirable, and I am confident that these traits, along
        with the skills she has developed, will serve her well in any future
        career. Joana has shown that with hard work, focus, and a strong desire
        to learn, there are no limits to what she can achieve. I do not doubt
        that she will excel in any endeavour she pursues and bring great value
        to any team.
      </p>
      <div className="spa">
        <p className="font-bold text-black tracking-wider">Michael Hammond</p>
        <p>Tech Lead, Tendo Technologies</p>
      </div>
    </article>
  );
}
