import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          EXPERIENCE
        </h2>

        {/* Animated Title Line */}
        <div className="animated-title-line"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative">

        {/* CENTER ANIMATED TIMELINE */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[6px] h-full">
          <div className="timeline-line"></div>
        </div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
          >
            {/* CARD */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl
              border border-white/20
              bg-gray-900/90
              backdrop-blur-md
              shadow-[0_0_20px_rgba(130,69,236,0.3)]
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(130,69,236,0.7)]
              ${
                index % 2 === 0
                  ? "mr-auto ml-0"
                  : "ml-auto mr-0"
              }`}
            >
              {/* HEADER */}
              <div className="flex items-center space-x-6">
                {/* LOGO */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* INFO */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-400 text-justify leading-relaxed">
                {experience.desc}
              </p>

              {/* SKILLS */}
              <div className="mt-4">
                <h5 className="font-medium text-white">
                  Skills:
                </h5>

                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec]
                      text-gray-300
                      px-4 py-1
                      text-xs sm:text-sm
                      rounded-lg
                      mr-2 mb-2
                      border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;