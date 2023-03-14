import React from "react";
import townCrier from "../images/towncrier-ss.jpg";
import blogSS from "../images/techblog-ss.jpg";
import colorTheme from "../images/colorpallet-ss.jpg";
import planner from "../images/planner-ss.jpg";
import projectMan from "../images/project-man-ss.jpg";
export function Projects() {
  const projectArray = [
    {
      title: "Town Crier Database",
      deployed: "https://town-crier-database.herokuapp.com/.",
      source: "https://github.com/EfSoren/Town-Crier",
      image: townCrier,
      description:
        "A project done using agile development practices. The purpose of this project is to allow users to connect with others based on their location. I developed the back end routing and database structure for this project.",
    },
    {
      title: "Project Management",
      deployed: "https://project3-projectmanagement.herokuapp.com/",
      source: "https://github.com/EfSoren/project_management",
      image: projectMan,
      description:
        "A MERN application that uses graphQL and React to create and display projects which will be shared automatically with all members associated to your team",
    },
    {
      title: "Tech Blog",
      deployed: "https://immense-temple-15308.herokuapp.com/home",
      source: "https://github.com/EfSoren/c14-techBlog",
      description:
        "A project I undertook to further my skills creating a tech blog. Users can post and comment with others about all things tech.",
      image: blogSS,
    },
    {
      title: "Color Theme Generator",
      deployed: "https://jacee94.github.io/image-color-picker/",
      source: "https://github.com/Jacee94/image-color-picker",
      description:
        "Built in an agile development team. This project makes calls to restAPI's to receive images and select colors, to generate a matching color scheme. I was in charge of building the functionality for sending receiving and displaying color data.",
      image: colorTheme,
    },
    {
      title: "Daily Planner",
      deployed: "https://efsoren.github.io/c5-dailyPlanner/",
      source: "https://github.com/EfSoren/c5-dailyPlanner",
      description:
        "A project to create a site to track daily activities and schedules, that persists data in storage between page visits. layout changes color hourly based on current time to display if and event is in the past, present, or future",
      image: planner,
    },
  ];
  const ProjectCard = ({ title, deployed, source, description, image }) => {
    return (
      <article className="project-card">
        <div className="image-cont">
          <img className="project-image" src={image}></img>
        </div>
        <section className="project-text">
          <h1 className="project-title">{title}</h1>
          <h2 className="project-description">{description}</h2>
          <div className="button-cont">
            <a className="project-button" href={deployed}>
              <button>Live Site</button>
            </a>
            <a className="project-button" href={source}>
              <button>Source Code</button>
            </a>
          </div>
        </section>
      </article>
    );
  };

  return (
    <section className="project-cont">
      {projectArray.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
