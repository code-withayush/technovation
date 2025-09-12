import React, { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import LogoNavbar from "./components/LogoNavbar";
import MainNavbar from "./components/MainNavbar";
import AboutCampus from "./components/AboutCampus";
import ProjectSection from "./components/ProjectSection";
import Events from "./components/Events";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

function App() {
  const [fontSize, setFontSize] = useState(16);
  const increase = () => setFontSize((prev) => prev + 2);
  const decrease = () => setFontSize((prev) => Math.max(12, prev - 2));

  return (
    <div style={{ fontSize }}>
      <header>
        <TopNavbar increase={increase} decrease={decrease} />
        <LogoNavbar />
        <MainNavbar />
      </header>
      <AboutCampus />
      <ProjectSection />
      <Events />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
