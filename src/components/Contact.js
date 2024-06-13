// src/components/Contact.js

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-5/6 md:w-5/6 bg-gray-900 rounded-lg overflow-hidden p-10 flex flex-row">
          <div className="flex-shrink-0 mr-10">
            <img
              src="./ResumePic.png"
              alt="Resume"
              width="600px"
              height="600px"
              style={{ filter: "opacity(0.9)" }}
            />
          </div>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md flex-grow">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Location
              </h2>
              <p className="mt-1">Kansas City Metro Area</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                pbillinger48@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">913-687-7936</p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                RESUME
              </h2>
              <a
                href="./ParkerBillingerResume.pdf"
                download="Parker_Billinger_Resume.pdf"
                className="text-indigo-400 leading-relaxed"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}