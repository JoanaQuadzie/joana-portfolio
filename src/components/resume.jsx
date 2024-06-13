import React from "react";

export default function Resume() {
  return (
    <section>
      <h2 className="text-2xl font-bold mt-24 mb-4 uppercase tracking-wider text-center">
        My Resume
      </h2>
      <div className="md:grid md:grid-cols-2">
        <div className="px-8">
          <h3 className="text-center font-bold text-2xl py-4 ">Education</h3>
          <div>
            <h4 className="font-bold text-xl mb-4">MEST Africa</h4>
            <div>
              <p className="font-bold text-lg">Web Development</p>
              <p className="font-bold text-m mb-4">February 2024 - May 2024</p>
              <p>
                Utilized programming frameworks to construct interactive and
                responsive websites using HMTL, CSS and JavaScript
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 mt-8">ALISON</h4>
            <div>
              <p className="font-bold text-lg">
                Customer Service Skills and Administration
              </p>
              <p className="font-bold text-m mb-4">April 2023 - May 2023</p>
              <p>
                Completed coursework in effective communication, conflict
                resolution, and customer satisfaction strategies
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 mt-8">KNUST</h4>
            <div>
              <p className="font-bold text-lg">
                Aquaculture and Water Resource Management
              </p>
              <p className="font-bold text-m mb-4">August 2016 - August 2020</p>
              <p>
                Focused on aquaculture-related topics including fish farming,
                sustainable aquaculture practices, and aquatic animal health
              </p>
            </div>
          </div>
        </div>

        <div>
          {" "}
          <h3 className="text-center font-bold text-2xl py-4 ">Experience</h3>
          <div className="space-y-10">
            <div className="px-8">
              <h4 className="font-bold text-xl mb-4">
                Remote Web Developer Intern
              </h4>
              <div>
                <div className="font-bold text-m">
                  <p className="text-lg">CoExtreme</p>
                  <p>2024</p>
                </div>
              </div>
            </div>
            <div className="px-8">
              <h4 className="font-bold text-xl mb-4">Web Developer</h4>
              <div>
                <div className="font-bold text-m">
                  <p className="text-lg">MEST Africa</p>
                  <p>February 2024 - May 2024</p>
                </div>
              </div>
            </div>
            <div className="px-8">
              <h4 className="font-bold text-xl mb-4">Administrator</h4>
              <div>
                <div className="font-bold text-m">
                  <p className="text-lg">Sure Success College</p>
                  <p>August 2023 - Present</p>
                </div>
              </div>
            </div>
            <div className="px-8">
              <h4 className="font-bold text-xl mb-4">
                Administrative and Sales Assistant
              </h4>
              <div>
                <div className="font-bold text-m">
                  <p className="text-lg">
                    2T&J Hygiene and Paper Solutions Limited
                  </p>
                  <p>July 2021 - February 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
