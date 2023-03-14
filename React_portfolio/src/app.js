import React, { useState } from "react";
import { Nav } from "./components/nav";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Skills } from "./components/skills";
import { Footer } from "./components/footer";
export function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
  };
  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}
