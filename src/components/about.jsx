import React from 'react';
import { skills } from '../Utils/util';

export default function about() {
    return (
      <div>
        <div
          id="about"
          className=" md:grid-cols-2 lg:grid-cols-1 bg-zinc-300 text-black"
        >
          <div className="text-center mt-10 pt-2">
            <h2 className="text-3xl py-3 font-bold text-lime-700">
              About Me
            </h2>
            <p className=" p-4 text-2xl md:w-6/6 text-justify">
              Acknowledging the ever-growing significance of technology in
              contemporary society, I am compelled to embark on a new challenge
              of pursuing a Web Development program. This decision serves as a
              pivotal step towards establishing myself in the dynamic space of
              technology. I am enthusiastic about embracing this opportunity and
              eagerly anticipate a rewarding career progress within the tech
              industry.
            </p>
          </div>
          <div>
            <h3 className="text-3xl gap-11 py-6 font-bold text-lime-700 text-center mt-10">
              Skills
            </h3>
            <div className="flex item-center justify-center gap-4 flex-wrap pb-8">
              {skills.map((item) => (
                <span
                  key={item.id}
                  className="text-black bg-white font-medium rounded-lg text-sm py-2 px-4"
                >
                  {item.skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
