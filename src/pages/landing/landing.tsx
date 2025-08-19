import landingStyles from "./landing.module.css";
import ProjectCard from "../../components/projectCard/projectCard";
import Footer from "../../components/footer/Footer";

export default function LandingPage() {
  return (
    <div className={landingStyles.imageContainer}>
      <div className={landingStyles.container}>
        <div className={landingStyles.horizontalFlex}>
          <div className={landingStyles.avatar}>
            <div className={landingStyles.greeting}>
              <p>Hi! How are you?</p>
            </div>
            <img src="./pixels.jpg" alt="" />
          </div>
          <div className={landingStyles.whiteBox}>
            <div className={landingStyles.title}>
              <p></p>
              <h1>Sirojiddin Aripov</h1>
            </div>
            <p>Alumni of The Ohio State University</p>
            <p>Bachelor's in Computer Science & Engineering</p>
          </div>
        </div>
        <div className={landingStyles.whiteBox}>
          <div className={landingStyles.title}>
            <p></p>
            <p></p>
            <p></p>
            <h1>The Odin Project's</h1>
          </div>
        </div>
        <div className={landingStyles.grid}>
          <ProjectCard
            name="Fake Store"
            description="WebApp that pulls product information from an API. Present all products with professional design."
            techUsed={[
              ["React.js", "#1b7eef"],
              ["React Routers", "#f5425a"],
              ["JavaScript", "#ebdb34"],
              ["Context API", "#1b7eae"],
            ]}
            link={"https://github.com/Aripov-Sirojiddin/Project-Fake-Store"}
          />
          <ProjectCard
            name="Battleship"
            description="Multiplayer battleship game made with Vanilla JavaScript. Utilizes drag and drop functionality of HTML."
            techUsed={[
              ["Vanilla JS", "#ebdb34"],
              ["HTML Drag & Drop API", "#eb7f13"],
            ]}
            link={"https://github.com/Aripov-Sirojiddin/Project-Battleship"}
          />
          <ProjectCard
            name="Members Only"
            description="A server based app, with authentication."
            techUsed={[
              ["Express JS", "#04d10e"],
              ["Passport JS", "#66c7ff"],
              ["PostgreSQL", "#1b7eae"],
            ]}
            link={"https://github.com/Aripov-Sirojiddin/Members-Only-JS"}
          />
        </div>

        <Footer color="#1b7eef" />
      </div>
    </div>
  );
}
