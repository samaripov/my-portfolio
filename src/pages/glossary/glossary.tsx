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
            repoLink={"https://github.com/Aripov-Sirojiddin/Project-Fake-Store"}
            imageSource={"./FakeStore-Photos/store-catalog.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
            projectLink={"https://aripov-fake-store.netlify.app/"}
            glossary={[
              [
                "JSON.parse",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/componets/addRemoveItemBtn/addRemoveItemBtn.jsx#L6",
              ],
              [
                "useContext()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/componets/bagIcon/bagIcon.jsx#L8",
              ],
              [
                "useEffect()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/componets/navbar/navbar.jsx#L12",
              ],
              [
                "useLocation()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/componets/navbar/navbar.jsx#L8",
              ],
              [
                "toFixed()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/componets/reciept/reciept.jsx#L23",
              ],
              [
                "URLSearchParams()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/componets/searchBar/searchBar.jsx#L11",
              ],
              [
                "useSubmit()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/componets/searchBar/searchBar.jsx#L7",
              ],
              [
                "Math.round()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/helpers/fitsProductConstraints.js#L23",
              ],
              [
                "createContext()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/App.jsx#L7",
              ],
              [
                "getElementById()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/App.jsx#L17",
              ],
              [
                "createBrowserRouter",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/main.jsx#L13",
              ],
              [
                "<RouterProvider ... />",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/main.jsx#L52",
              ],
            ]}
          />
          <ProjectCardHorizontal
            name="Responsive Homepage"
            repoLink={
              "https://github.com/samaripov/Project-Homepage?tab=readme-ov-file"
            }
            imageSource={"./ResponsiveCSS-Photos/intro.png"}
            imageAlt={"Image of a placeholder introduction page."}
            projectLink={"https://samaripov.github.io/Project-Homepage/"}
            glossary={[
              [
                "display: flex",
                "https://github.com/samaripov/Project-Homepage/blob/ccf91db98ade02666156189c327aa9d18f5018b4/style.css#L3",
              ],
              [
                "transform: translate()",
                "https://github.com/samaripov/Project-Homepage/blob/ccf91db98ade02666156189c327aa9d18f5018b4/style.css#L190",
              ],
              [
                "object-fit",
                "https://github.com/samaripov/Project-Homepage/blob/ccf91db98ade02666156189c327aa9d18f5018b4/style.css#L94",
              ],
              [
                "display: grid;",
                "https://github.com/samaripov/Project-Homepage/blob/ccf91db98ade02666156189c327aa9d18f5018b4/style.css#L84",
              ],
              [
                "grid-template-columns: repeat(3, auto);",
                "https://github.com/samaripov/Project-Homepage/blob/ccf91db98ade02666156189c327aa9d18f5018b4/style.css#L83",
              ],
              [
                "transform",
                "https://github.com/samaripov/Project-Homepage/blob/ccf91db98ade02666156189c327aa9d18f5018b4/style.css#L143C3-L143C12",
              ],
              [
                "@media screen",
                "https://github.com/samaripov/Project-Homepage/blob/ccf91db98ade02666156189c327aa9d18f5018b4/style.css#L184C1-L184C14",
              ],
            ]}
          />
          <ProjectCardHorizontal
            name="Members Only"
            direction="flip"
            repoLink={"https://github.com/Aripov-Sirojiddin/Members-Only-JS"}
            imageSource={"./MembersOnly-Photos/chat.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
            glossary={[
              [
                "await bcrypt.hash()",
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/controllers/signupControllers.js#L20",
              ],
              [
                "res.render()",
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/controllers/signupControllers.js#L14C7-L14C17",
              ],
              [
                'res.redirect("/")',
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/controllers/signupControllers.js#L25",
              ],
              [
                "SELECT * FROM ...",
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/models/membersModel.js#L8C6-L8C19",
              ],
              [
                "INSERT INTO ...",
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/models/messagesModel.js#L14C6-L14C17",
              ],
              [
                "... INNER JOIN ...",
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/models/messagesModel.js#L6C53-L6C63",
              ],
              [
                "await pool.query()",
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/models/usersModel.js#L5C9-L5C19",
              ],
              [
                '... .get("/...")',
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/routers/indexRouter.js#L5",
              ],
              [
                '... .post("/...")',
                "https://github.com/samaripov/Members-Only-JS/blob/63544f8010e70e6076eeae71c1b8d645a556e6ed/routers/initiationRouter.js#L6C17-L6C25",
              ],
            ]}
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
