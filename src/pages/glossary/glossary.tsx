import ProjectCardHorizontal from "../../components/projectCardHorizontal/projectCardHorizontal";
import landingStyles from "../landing/landing.module.css";
import glossaryStyles from "./glossary.module.css";
import Footer from "../../components/footer/Footer";

export default function GlossaryPage() {
  return (
    <div className={glossaryStyles.imageContainer}>
      <div className={glossaryStyles.container}>
        <div className={landingStyles.horizontalFlex}>
          <div className={landingStyles.avatar}>
            <div className={landingStyles.greeting} style={{ opacity: "1" }}>
              <p>Lovely glossary!</p>
            </div>
            <img src="./pixels.jpg" alt="" />
          </div>
        </div>
        <div className={glossaryStyles.projects}>
          <ProjectCardHorizontal
            name="Fake Store"
            direction="flip"
            glossary={[
              [
                "JSON.parse",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/addRemoveItemBtn/addRemoveItemBtn.jsx",
              ],
              [
                "useContext()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
              [
                "useEffect()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/navbar/navbar.jsx",
              ],
              [
                "useLocation()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/navbar/navbar.jsx",
              ],
              [
                "toFixed()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
              [
                "URLSearchParams()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
              [
                "useSubmit()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
              [
                "Math.round()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
              [
                "createContext()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
              [
                "getElementById()",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
              [
                "createBrowserRouter",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
              [
                "<RouterProvider ... />",
                "https://github.com/samaripov/Project-Fake-Store/blob/main/src/componets/productCard/productCard.jsx",
              ],
            ]}
            repoLink={"https://github.com/Aripov-Sirojiddin/Project-Fake-Store"}
            imageSource={"./FakeStore-Photos/store-catalog.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
            projectLink={"https://aripov-fake-store.netlify.app/"}
          />
          <ProjectCardHorizontal
            name="Responsive Homepage"
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
            repoLink={"https://github.com/Aripov-Sirojiddin/Members-Only-JS"}
            imageSource={"./MembersOnly-Photos/chat.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
          />
          <ProjectCardHorizontal
            name="Memory Game"
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
            repoLink={"https://github.com/Aripov-Sirojiddin/Project-Battleship"}
            imageSource={"./Battleship-Photos/ingame.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
            projectLink={"https://samaripov.github.io/Project-Battleship/"}
          />
          <ProjectCardHorizontal
            name="React CV Forms"
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
            repoLink={"https://github.com/Aripov-Sirojiddin/Project-Fake-Store"}
            imageSource={"./FileUploader-Photos/menuUI.png"}
            imageAlt={
              "An image of folders with Google Auth next the folders. made by Sam Aripov"
            }
          />
        </div>
      </div>
      <Footer color="#e40066" />
    </div>
  );
}
