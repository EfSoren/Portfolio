import React from "react";
import hero from "../images/profilepicEf.jpg";

export function About() {
  return (
    <article className="about-cont">
      <img className="about-hero" src={hero} alt="Profile"></img>
      <section className="about-wrapper">
        <h1 className="about-intro">
          I'm <span className="pop-text"> Ethan Sorensen</span>. A web developer
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
