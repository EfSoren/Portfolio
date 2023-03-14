import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
export function Tags() {
  const iconArray = [
    { id: 1, icon: faJs, styles: { color: "#FFD600" } },
    { id: 2, icon: faReact, styles: { color: "#61DBFB" } },
    { id: 3, icon: faHtml5, styles: { color: "#e34c26" } },
    { id: 4, icon: faSass, styles: { color: "#CD6799" } },
    { id: 5, icon: faNodeJs, styles: { color: "#3C873A" } },
  ];
  const Card = ({ icon, styles }) => {
    return <FontAwesomeIcon icon={icon} className="fa-2x" style={styles} />;
  };
  return (
    <>
      {iconArray.map((icon) => (
        <Card key={icon.id} {...icon} />
      ))}
    </>
  );
}
