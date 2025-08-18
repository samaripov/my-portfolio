import { useState } from "react";
import landingStyles from "./landing.module.css";

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
        
        
      </div>
    </div>
  );
}
