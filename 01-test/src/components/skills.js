import React from "react";
export function Skills() {
  return (
    <article className="main-cont">
      <div className="skills-list">
        <h1 className="skills-title">Skills</h1>
        <div className="spacer"></div>
        <section className="genre-cont">
          <p className="genre-title">Front End</p>
          <div className="skill-genre">
            <p className="tech-skill even">HTML</p>
            <p className="tech-skill odd">CSS</p>
            <p className="tech-skill even">JavaScript</p>
            <p className="tech-skill odd">React</p>
            <p className="tech-skill even">PWA</p>
            <p className="tech-skill odd">BootStrap</p>
          </div>
        </section>
        <section className="genre-cont">
          <p className="genre-title">Back End</p>
          <div className="skill-genre">
            <p className="tech-skill even">Node</p>
            <p className="tech-skill odd">Express</p>
            <p className="tech-skill even">MySQL</p>
            <p className="tech-skill odd">MongoDB</p>
            <p className="tech-skill even">NoSql</p>
          </div>
        </section>
        <section className="genre-cont">
          <p className="genre-title">Other Tech</p>
          <div className="skill-genre">
            <p className="tech-skill even">Insomnia</p>
            <p className="tech-skill odd">Postman</p>
            <p className="tech-skill even">NPM</p>
            <p className="tech-skill odd">Jest</p>
          </div>
        </section>
      </div>
    </article>
  );
}
