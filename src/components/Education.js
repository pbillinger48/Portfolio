// src/components/Education.js

import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Education
        </h1>
        <div className="flex flex-wrap m-4">
          {education.map((school) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                
                <p className="leading-relaxed mb-6">{school.degree}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={school.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {school.name}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}