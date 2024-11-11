import React from "react";
import ProjectButton from "./ProjectButton";

function ProjectCard({ image, tools, projectName, demoUrl, codeUrl }) {
  return (
    <div className="group relative border border-paragraph/10 rounded-md md:h-[245px] md:w-[245px] lg:h-[280px] lg:w-[280px] flex md:items-end md:justify-end items-center justify-between p-2.5 md:p-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black to-[rgba(0,0,0,0.10)] z-20 group-hover:cursor-pointer"></div>
      {/* For Big Screen  */}
      <img
        src={image}
        alt={`${projectName}`}
        className="md:top-0 md:left-0 md:right-0 md:bottom-0 md:w-full md:h-full rounded-md md:absolute md:block hidden w-[50px] object-cover group-hover:cursor-pointer z-10"
      />

      <div className="w-full md:flex md:flex-col md:gap-2 md:items-end md:p-3 md:relative z-30 hidden group-hover:cursor-pointer">
        <div className="w-full flex flex-col items-end">
          <h4 className="text-[16px] font-Montserrat font-semibold text-white">
            {projectName}
          </h4>
          <h4 className="text-[10px] font-Montserrat font-light text-white uppercase">
            {tools}
          </h4>
        </div>

        <div className="w-full hidden group-hover:block transition-all duration-150 delay-150 ease-in-out">
          <div className="w-full flex gap-2 items-center justify-between">
            <ProjectButton label="Live Demo" url={demoUrl} />

            <div
              className={`${codeUrl === "none" ? "hidden" : "block w-full"}`}
            >
              <ProjectButton label="Source Code" url={codeUrl} />
            </div>
          </div>
        </div>
      </div>

      {/* For Small Screen  */}
      <div className="w-full flex items-center gap-2 md:hidden z-30 group-hover:cursor-pointer">
        <img
          src={image}
          alt={`${projectName}`}
          className="w-[50px] object-cover border border-paragraph/10 rounded-sm"
        />
        <div className="w-full flex items-center justify-between">
          <div>
            <h4 className="text-[16px] font-semibold text-white">
              {projectName}
            </h4>
            <h4 className="text-[10px] font-light text-white/80">{tools}</h4>
          </div>
          <div className="md:hidden transition-all duration-150 delay-150 ease-in-out">
            <div className="w-full flex gap-1 items-center justify-between">
              <ProjectButton label="Live Demo" url={demoUrl} />
              {/* <ProjectButton label="Source Code" url={codeUrl} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
