import GlossaryCard from "../../components/glossaryCard/glossaryCard";
import ProjectCardHorizontal from "../../components/projectCardHorizontal/projectCardHorizontal";
import landingStyles from "../landing/landing.module.css";
import glossaryStyles from "./glossary.module.css";

export default function GlossaryPage() {
  return (
    <div className={glossaryStyles.imageContainer}>
      <div className={glossaryStyles.container}>
        <div className={landingStyles.horizontalFlex}>
          <div className={landingStyles.avatar}>
            <div className={landingStyles.greeting} style={{ opacity: "1" }}>
              <p>Lovely Glossary!</p>
            </div>
            <img src="./pixels.jpg" alt="" />
          </div>
        </div>
        <GlossaryCard />
        <div className={glossaryStyles.projects}>
          <ProjectCardHorizontal
            name="Fake Store"
            direction="flip"
            techUsed={[
              ["React.js", "#1b7eef"],
              ["React Routers", "#f5425a"],
              ["Context API", "#1b7eae"],
              ["JavaScript", "#ebdb34"],
              ["CSS", "#ab06cc"],
            ]}
            repoLink={"https://github.com/Aripov-Sirojiddin/Project-Fake-Store"}
            imageSource={"./FakeStore-Photos/store-catalog.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
            projectLink={"https://aripov-fake-store.netlify.app/"}
          />
          <ProjectCardHorizontal
            name="Responsive Homepage"
            techUsed={[
              ["CSS", "#ab06cc"],
              ["JavaScript", "#ebdb34"],
            ]}
            repoLink={
              "https://github.com/samaripov/Project-Homepage?tab=readme-ov-file"
            }
            imageSource={"./ResponsiveCSS-Photos/intro.png"}
            imageAlt={"Image of a placeholder introduction page."}
            projectLink={"https://samaripov.github.io/Project-Homepage/"}
          />
          <ProjectCardHorizontal
            name="Members Only"
            direction="flip"
            techUsed={[
              ["Express JS", "#04d10e"],
              ["Passport JS", "#66c7ff"],
              ["PostgreSQL", "#1b7eae"],
              ["PrismaORM", "#5b34eb"],
              ["JavaScript", "#ebdb34"],
              ["CSS", "#ab06cc"],
            ]}
            repoLink={"https://github.com/Aripov-Sirojiddin/Members-Only-JS"}
            imageSource={"./MembersOnly-Photos/chat.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
          />
          <ProjectCardHorizontal
            name="Memory Game"
            techUsed={[
              ["React.js", "#1b7eef"],
              ["JavaScript", "#ebdb34"],
              ["CSS", "#ab06cc"],
            ]}
            repoLink={
              "https://github.com/samaripov/Project-Memory-Card?tab=readme-ov-file"
            }
            imageSource={"./PokemonMemory-Photos/game.png"}
            imageAlt={
              "An image of a Pokémon card memory game! made by Sam Aripov"
            }
            projectLink={"https://ari-pokemon-memory.netlify.app/"}
          />
          <ProjectCardHorizontal
            name="Battleship"
            direction="flip"
            techUsed={[
              ["JavaScript", "#ebdb34"],
              ["CSS", "#ab06cc"],
              ["HTML Drag & Drop API", "#eb7f13"],
            ]}
            repoLink={"https://github.com/Aripov-Sirojiddin/Project-Battleship"}
            imageSource={"./Battleship-Photos/ingame.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
            projectLink={"https://samaripov.github.io/Project-Battleship/"}
          />
          <ProjectCardHorizontal
            name="React CV Forms"
            techUsed={[
              ["React.js", "#1b7eef"],
              ["JavaScript", "#ebdb34"],
              ["CSS", "#ab06cc"],
            ]}
            repoLink={
              "https://github.com/samaripov/Project-CV-Application?tab=readme-ov-file"
            }
            imageSource={"./CVForm-Photos/form.png"}
            imageAlt={"Image of a form for a CV application."}
            projectLink={"https://aripov-cv-app.netlify.app/"}
          />
          <ProjectCardHorizontal
            name="File Uploader"
            direction="flip"
            techUsed={[
              ["React.js", "#1b7eef"],
              ["React Routers", "#f5425a"],
              ["Redux", "#1b7eae"],
              ["JavaScript", "#ebdb34"],
              ["Express JS", "#04d10e"],
              ["Passport JS", "#66c7ff"],
              ["PostgreSQL", "#1b7eae"],
              ["PrismaORM", "#5b34eb"],
              ["Google Auth", "#fc030b"],
              ["JWT", "#5203fc"],
            ]}
            repoLink={"https://github.com/Aripov-Sirojiddin/Project-Fake-Store"}
            imageSource={"./FileUploader-Photos/menuUI.png"}
            imageAlt={
              "An image of folders with Google Auth next the folders. made by Sam Aripov"
            }
          />
        </div>
      </div>
    </div>
  );
}
