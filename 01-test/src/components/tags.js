import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faSass,
  faNodeJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
export function Tags() {
  const iconArray = [
    { icon: faJs, styles: { color: "#FFD600" } },
    { icon: faReact, styles: { color: "#61DBFB" } },
    { icon: faHtml5, styles: { color: "#e34c26" } },
    { icon: faSass, styles: { color: "#CD6799" } },
    { icon: faNodeJs, styles: { color: "#3C873A" } },
    { icon: faWordpress, styles: { color: "#00749C" } },
  ];
  const Card = ({ icon, styles }) => {
    return <FontAwesomeIcon icon={icon} className="fa-2x" style={styles} />;
  };
  return (
    <>
      {iconArray.map((icon) => (
        <Card {...icon} />
      ))}
    </>
  );
}
