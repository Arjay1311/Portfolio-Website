/*TODO :
1. Add a text which transitions into different designations(skills of you), 
below your Name */ 

"use client";
import React from "react";

const header = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-amber-50 mb-4 text-6xl sm:text-6xl font-black">
          <div className="mt-8 text-fuchsia-800 inline-block animate-slideInLeft">
            Hello I'm,
          </div>
          <br />
          <span className="inline-block animate-slideInLeft">Arjay</span>
        </h1>
        <br />
        <div className="w-3/4">
          <p className="text-amber-50 text-lg mb-6 lg:text-l animate-slideInBottom">
            Ambitious student with strong problem-solving and programming skills
            in various languages, having a good foundational knowledge in
            artificial intelligence, particularly focused on machine learning.
          </p>
        </div>
        <br />
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="bg-white hover:bg-purple-900 text-black px-8 py-5 rounded-full w-full sm:w-fit animate-slideInBottom"
          >
            View Resume
          </button>
          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=arjayjg1311@gmail.com"
              )
            }
            className="text-white border-2 border-white hover:bg-gray-700 px-8 py-5 rounded-full w-full sm:w-fit animate-slideInBottom"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default header;
