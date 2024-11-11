import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import FilterButton from "./FilterButton";
import WorkData from "../WorkData";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(WorkData);
    console.log("1 ", WorkData);
    console.log("2 ", projects);
  }, [projects]);

  const DisplayTab = () => {
    switch (activeTab) {
      case "websites":
        return (
          <div className="container m-auto md:flex md:items-center md:justify-center md:flex-wrap md:gap-[10px] space-y-[10px] md:space-y-0">
            {projects.filter((p) => p.projectType === "websites").length > 0 ? (
              projects
                .filter((p) => p.projectType === "websites")
                .map((p, i) => (
                  <ProjectCard
                    key={i}
                    image={p.image}
                    projectName={p.projectName}
                    tools={p.tools}
                    demoUrl={p.viewDemo}
                    codeUrl={p.sourceCode}
                  />
                ))
            ) : (
              <p>No Projects Found</p>
            )}
          </div>
        );
      case "designs":
        return (
          <div className="container m-auto md:flex md:items-center md:justify-center md:flex-wrap md:gap-[10px] space-y-[10px] md:space-y-0">
            {projects.filter((p) => p.projectType === "designs").length > 0 ? (
              projects
                .filter((p) => p.projectType === "designs")
                .map((p, i) => (
                  <ProjectCard
                    key={i}
                    image={p.image}
                    projectName={p.projectName}
                    tools={p.tools}
                    demoUrl={p.viewDemo}
                    codeUrl={p.sourceCode}
                  />
                ))
            ) : (
              <p>No Projects Found</p>
            )}
          </div>
        );
      case "mobileApps":
        return (
          <div className="container m-auto md:flex md:items-center md:justify-center md:flex-wrap md:gap-[10px] space-y-[10px] md:space-y-0">
            {projects.filter((p) => p.projectType === "mobileApps").length >
            0 ? (
              projects
                .filter((p) => p.projectType === "mobileApps")
                .map((p, i) => (
                  <ProjectCard
                    key={i}
                    image={p.image}
                    projectName={p.projectName}
                    tools={p.tools}
                    demoUrl={p.viewDemo}
                    codeUrl={p.sourceCode}
                  />
                ))
            ) : (
              <p>No Projects Found</p>
            )}
          </div>
        );
      case "webApps":
        return (
          <div className="container m-auto md:flex md:items-center md:justify-center md:flex-wrap md:gap-[10px] space-y-[10px] md:space-y-0">
            {projects.filter((p) => p.projectType === "webApps").length > 0 ? (
              projects
                .filter((p) => p.projectType === "webApps")
                .map((p, i) => (
                  <ProjectCard
                    key={i}
                    image={p.image}
                    projectName={p.projectName}
                    tools={p.tools}
                  />
                ))
            ) : (
              <p>No Projects Found</p>
            )}
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="space-y-[50px] mt-10 p-5" id="projects">
      <div className="container mx-auto flex flex-col">
        {/* title */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-8 mb-10 mx-auto px-5"
        >
          <h3 className="max-w-2xl font-Caveat text-xl font-bold text-center tracking-wider text-title/90 -mb-8">
            Projects
          </h3>
          <h1 className="max-w-2xl font-Montserrat text-3xl font-bold text-center text-primary -mb-5 md:text-4xl">
            Top Projects
          </h1>
        </motion.div>
      </div>

      <div className="container m-auto flex flex-wrap items-center justify-center gap-[10px]">
        <FilterButton
          title={"Website"}
          subTitle={"Wordpress & HTML/CSS"}
          active={activeTab === "websites" ? true : false}
          onClick={() => setActiveTab("websites")}
        />
        <FilterButton
          title={"Designs"}
          subTitle={"Figma & Photoshop"}
          active={activeTab === "designs" ? true : false}
          onClick={() => setActiveTab("designs")}
        />
        <FilterButton
          title={"Mobile Apps"}
          subTitle={"React Native"}
          active={activeTab === "mobileApps" ? true : false}
          onClick={() => setActiveTab("mobileApps")}
        />
        <FilterButton
          title={"Web Apps"}
          subTitle={"React & RedwoodJs"}
          active={activeTab === "webApps" ? true : false}
          onClick={() => setActiveTab("webApps")}
        />
      </div>

      {activeTab === "" ? (
        <div className="container m-auto md:flex md:items-center md:justify-center md:flex-wrap md:gap-[10px] space-y-[10px] md:space-y-0">
          {projects
            .map((p, i) => (
              <ProjectCard
                key={i}
                image={p.image}
                projectName={p.projectName}
                tools={p.tools}
                demoUrl={p.viewDemo}
                codeUrl={p.sourceCode}
              />
            ))
            .slice(0, 12)}
        </div>
      ) : (
        DisplayTab()
      )}
    </div>
  );
}

export default ProjectsSection;
