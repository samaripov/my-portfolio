import GlossaryCard from "../../components/glossaryCard/glossaryCard";
import ProjectCard from "../../components/projectCard/projectCard";
import landingStyles from "../landing/landing.module.css";
import glossaryStyles from "./glossary.module.css";

export default function GlossaryPage() {
  return (
    <div className={landingStyles.projectsImageContainer}>
      <div className={landingStyles.container}>
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
          <ProjectCard
            name="Fake Store"
            description="WebApp that pulls product information from an API. Present all products with professional design."
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
          <ProjectCard
            name="Responsive Homepage"
            description="Responsive portfolio mock-up. Changes the layout based on the screen size."
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
          <ProjectCard
            name="Members Only"
            description="A server based app, with authentication. Utilizes server side rendering with Embedded JavaScript."
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
          <ProjectCard
            name="Memory Game"
            description="React application that pulls images of Pokémon from an API. A game that made with React useEffect and useState."
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
          <ProjectCard
            name="Battleship"
            description="Multiplayer battleship game made with Vanilla JavaScript. Utilizes drag and drop functionality of HTML."
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
          <ProjectCard
            name="React CV Forms"
            description="React project that uses many different types of forms. Provides snappy UI for form fill-out."
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
        </div>
      </div>
    </div>
  );
}
