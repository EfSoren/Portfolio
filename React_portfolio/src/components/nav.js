import React from "react";
import "../styles/styles.css";
export function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <div className="title-bar">
        <h1 className="name-logo">@EfSoren</h1>
      </div>
      <div className="link-bar">
        <a href="#about" onClick={() => handlePageChange("About")}>
          About
        </a>
        <a href="#projects" onClick={() => handlePageChange("Projects")}>
          Projects
        </a>
        <a href="#contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </a>
        <a href="#skills" onClick={() => handlePageChange("Skills")}>
          Skills
        </a>
      </div>
    </nav>
  );
}
