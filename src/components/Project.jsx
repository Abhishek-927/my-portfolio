import React from "react";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/project1.png";
import projImg2 from "../assets/project2.png";
import projImg3 from "../assets/project3.png";

const Project = () => {
  const projects = [
    {
      title: "News Aweosome",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Sorting Visualizer",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "E-commerse Website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <div className="container row project-head py-5">
      <h2>Projects</h2>
      {projects.map((p, i) => {
        return (
          <div className="col-md-6 col-lg-4 col-sm-12" key={i}>
            <ProjectCard {...p} />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Project;
