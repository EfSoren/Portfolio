import React from "react";
import { Tags } from "./tags";

export function Footer() {
  return (
    <section className="footer-cont">
      <p className="about-bio">My favorite tech</p>
      <div className="tag-cont">
        <Tags />
      </div>
    </section>
  );
}
