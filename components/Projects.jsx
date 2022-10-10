import Image from "next/image";
import Link from "next/link";
import React from "react";
import socialNetworkImg from "../public/assets/projects/social-network-api.jpg";
import pawedCasterImg from "../public/assets/projects/group-project.png";
import netflixImg from "../public/assets/projects/netflix.jpg";
import budgetImg from "../public/assets/projects/budget.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Created</h2>
        {/* projects container */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Social Network API"
            backgroundImg={socialNetworkImg}
            projectUrl="/socialNetwork"
          />
          <ProjectItem
            title="PawedCaster - Group Project"
            backgroundImg={pawedCasterImg}
            projectUrl="/pawedcaster"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Budget Tracker"
            backgroundImg={budgetImg}
            projectUrl="/budgetTracker"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
