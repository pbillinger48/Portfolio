// src/components/Contact.js

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 lg:w-2/3 bg-gray-900 rounded-lg overflow-hidden p-5 md:p-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-5 md:mb-0 flex-shrink-0">
            <img
              src="./ResumePic.png"
              alt="Resume"
              className="w-full h-full object-cover rounded"
              style={{ filter: "opacity(0.9)" }}
            />
          </div>
          <div className="w-full md:w-2/3 bg-gray-900 relative flex flex-col py-6 rounded shadow-md">
            <div className="w-full px-6 mb-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Location
              </h2>
              <p className="mt-1 text-white">Kansas City Metro Area</p>
            </div>
            <div className="w-full px-6 mb-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:pbillinger48@gmail.com" className="text-indigo-400 leading-relaxed">
                pbillinger48@gmail.com
              </a>
            </div>
            <div className="w-full px-6 mb-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                PHONE
              </h2>
              <p className="leading-relaxed text-white">913-687-7936</p>
            </div>
            <div className="w-full px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
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