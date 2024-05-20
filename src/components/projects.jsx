import React from "react";
import Rightarrow from "../assets/rightarrow.png";
import Juice2 from "../assets/juice2.jpg";

export default function Projects() {
  return (
    <section>
      <h2 className="text-xl font-bold font-serif my-8">Projects</h2>
      <a
        class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#"
      >
        <img
          src={Juice2}
          class="shadow rounded-lg overflow-hidden border"
          alt="Juice"
        />
        <div class="mt-8">
          <h4 class="font-bold text-xl">DineRich JuiceBar</h4>
          <p class="mt-2 text-gray-600">
            A locally made drink hub with a unique taste which happens to be the
            preferrence of everyone upon having a sip
          </p>
          <div class="mt-5">
            <button
              type="button"
              class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              See Project
            </button>
            <img src={Rightarrow} />
          </div>
        </div>
      </a>
    </section>
  );
}
