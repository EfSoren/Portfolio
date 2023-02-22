import React, { useState } from "react";
import hero from "../images/profilepic.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Tags } from "./tags";

export function About() {
  return (
    <article className="about-cont">
      <img className="about-hero" src={hero}></img>
      <section className="about-wrapper">
        <h1 className="about-intro">
          Hi, i'm <span className="pop-text"> Ethan</span>. A web developer
          located in Lehi, Utah.
        </h1>
        <h2 className="about-sub">
          I am a full stack developer with a deep passion for
          <span className="pop-text"> Front End Development</span> and
          <span className="pop-text"> React</span> but love all forms of
          software-engineering
        </h2>
      </section>
      {/* <section>
        <p className="about-bio">My favorite tech is</p>
        <div className="tag-cont">
          <Tags />
        </div>
      </section> */}
    </article>
  );
}
