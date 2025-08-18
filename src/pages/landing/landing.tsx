import { useState } from "react";
import landingStyles from "./landing.module.css";
import ProjectCard from "../../components/projectCard/projectCard";

export default function LandingPage() {
  return (
    <div className={landingStyles.imageContainer}>
      <div className={landingStyles.container}>
        <div className={landingStyles.avatar}>
          <img src="./pixels.jpg" alt="" />
        </div>
        <div className={landingStyles.whiteBox}>
          <div className={landingStyles.title}>
            <p></p>
            <h1>Sirojiddin Aripov</h1>
          </div>
          <p>The Ohio State University Alumni</p>
          <p>Bachelor's in Computer Science & Engineering</p>
        </div>
        <ProjectCard
          name="Fake Store"
          imagePath="./FakeStore-Photos/store-catalog.png"
          description="WebApp that pulls product information from an API. Present all products with professional design."
          techUsed={[
            ["React.js", "#1b7eef"],
            ["React Routers", "#f5425a"],
            ["JavaScript", "#ebdb34"],
            ["Context API", "#1b7eae"]
          ]}
          imageAlt="Image alt"
          link={"https://github.com/Aripov-Sirojiddin/Project-Fake-Store"}
        />
      </div>
    </div>
  );
}
