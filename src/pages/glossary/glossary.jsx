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
            <img src="./avatar.png" alt="" />
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
                "document.getElementById()",
                "https://github.com/samaripov/Project-Fake-Store/blob/cf49337915745f72607aff28fc6fb1667ca3f921/src/App.jsx#L17",
              ],
              [
                "createBrowserRouter()",
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
            name="Real Time Messenger"
            repoLink={"https://github.com/samaripov/telegram-clone"}
            projectLink={"https://www.youtube.com/watch?v=lKj7Ao0507k"}
            imageSource={"./Telegram-Clone-Photos/Photo-2.png"}
            imageAlt={
              "Image of two chats having a basic discussion about an image of a pattern."
            }
            glossary={[
              [
                "Turbo::StreamsChannel.broadcast_prepend_to",
                "https://github.com/samaripov/telegram-clone/blob/1a9477afb310d720f6156c3fc0b09fcbafdc2754/app/controllers/chats_controller.rb#L34",
              ],
              [
                "ApplicationController.render",
                "https://github.com/samaripov/telegram-clone/blob/1a9477afb310d720f6156c3fc0b09fcbafdc2754/app/controllers/messages_controller.rb#L12C25-L12C53",
              ],
              [
                "respond_to do |format| ... end",
                "https://github.com/samaripov/telegram-clone/blob/1a9477afb310d720f6156c3fc0b09fcbafdc2754/app/controllers/messages_controller.rb#L40",
              ],
              [
                "ResizeObserver(this.scrollToTheBottom.bind(this))",
                "https://github.com/samaripov/telegram-clone/blob/1a9477afb310d720f6156c3fc0b09fcbafdc2754/app/javascript/controllers/scroll_down_when_new_message_controller.js#L6C5-L7C1",
              ],
              [
                "fullImage.onload = () => { ... }",
                "https://github.com/samaripov/telegram-clone/blob/1a9477afb310d720f6156c3fc0b09fcbafdc2754/app/javascript/controllers/update_image_on_load_finish_controller.js#L18",
              ],
              [
                "<%= turbo_stream_from ... %>",
                "https://github.com/samaripov/telegram-clone/blob/1a9477afb310d720f6156c3fc0b09fcbafdc2754/app/views/chats/show.html.erb#L5",
              ],
              [
                '<%= turbo_frame_tag "main" do %> ... <% end %>',
                "https://github.com/samaripov/telegram-clone/blob/1a9477afb310d720f6156c3fc0b09fcbafdc2754/app/views/chats/show.html.erb#L1C1-L1C33",
              ],
            ]}
          />
          <ProjectCardHorizontal
            name="File Uploader"
            direction="flip"
            repoLink={"https://github.com/samaripov/Project-File-Uploader"}
            imageSource={"./FileUploader-Photos/menuUI.png"}
            imageAlt={
              "An image of folders with Google Auth next the folders. made by Sam Aripov"
            }
            glossary={[
              [
                "configureStore( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/state/store.ts#L6",
              ],
              [
                "createSlice ( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/state/path/pathSlice.ts#L27C19-L27C30",
              ],
              [
                "createAsyncThunk< ... >( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/state/path/pathSlice.ts#L60C30-L60C46",
              ],
              [
                "axios.get( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/state/helpers/getFiles.ts#L4C16-L4C25",
              ],
              [
                "axios.post( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/routes/login/login.tsx#L26C11-L27C13",
              ],
              [
                "jwtDecode<Token>(token);",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/state/user/userSlice.ts#L23C26-L23C50",
              ],
              [
                'localStorage.setItem("token", token)',
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/state/user/userSlice.ts#L40C7-L41C1",
              ],
              [
                "useSelector( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/routes/files/files.tsx#L22C16-L22C27",
              ],
              [
                "useDispatch( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/routes/files/files.tsx#L23C20-L23C31",
              ],
              [
                "useNavigate( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/routes/files/files.tsx#L24C20-L24C31",
              ],
              [
                "... .map(()=>{ ... })",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/routes/files/files.tsx#L49C29-L49C32",
              ],
              [
                "dispatch( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/components/createOrUpdateFolder/createOrUpdateFolder.tsx#L89",
              ],
              [
                "useRef< ... >( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/client/src/components/folder/folder.tsx#L39C21-L39C27",
              ],
              [
                "await prisma.users.create( ... )",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/server/models/user.js#L34C22-L34C41",
              ],
              [
                "await prisma.files.findMany()",
                "https://github.com/samaripov/Project-File-Uploader/blob/c082064b72f3786f9a8d8bb40deb81d11e8f08f9/server/models/folders.js#L45C19-L45C46",
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
            glossary={[
              [
                "useState()",
                "https://github.com/samaripov/Project-Memory-Card/blob/8734df480508c65bf8f697c121f169bbfcbb735a/src/components/PokemonCard/PokemonCard.jsx#L6C41-L6C49",
              ],
              [
                "fetch()",
                "https://github.com/samaripov/Project-Memory-Card/blob/8734df480508c65bf8f697c121f169bbfcbb735a/src/components/PokemonCard/PokemonCard.jsx#L19",
              ],
              [
                "new Number()",
                "https://github.com/samaripov/Project-Memory-Card/blob/8734df480508c65bf8f697c121f169bbfcbb735a/src/components/PokemonCard/PokemonCard.jsx#L50C23-L50C29",
              ],
              [
                "filter: brightness()",
                "https://github.com/samaripov/Project-Memory-Card/blob/8734df480508c65bf8f697c121f169bbfcbb735a/src/components/PokemonCard/PokemonCard.css#L24C3-L24C22",
              ],
              [
                "slice()",
                "https://github.com/samaripov/Project-Memory-Card/blob/8734df480508c65bf8f697c121f169bbfcbb735a/src/helpers/capitalize.js#L1C62-L1C67",
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
            name="Battleship"
            direction="flip"
            repoLink={"https://github.com/Aripov-Sirojiddin/Project-Battleship"}
            imageSource={"./Battleship-Photos/ingame.png"}
            imageAlt={"Image of an e-commerce shop catalog made by Sam Aripov"}
            projectLink={"https://samaripov.github.io/Project-Battleship/"}
            glossary={[
              [
                "document.createElement()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L6C32-L6C45",
              ],
              [
                "classList.add()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L9C19-L9C33",
              ],
              [
                "document.addEventListener()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L20C16-L20C32",
              ],
              [
                "document.querySelector()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L30C18-L30C31",
              ],
              [
                "String.fromCharCode()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L72C21-L72C40",
              ],
              [
                "... .appendChild()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L15C15-L15C26",
              ],
              [
                "... .remove()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L32C18-L32C28",
              ],
              [
                "... .dataTransfer.setData()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L133",
              ],
              [
                "... .dataTransfer.getData()",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L135C13-L135C35",
              ],
              [
                "Turnary-Operation",
                "https://github.com/samaripov/Project-Battleship/blob/9395fb9dfd1b051d9dbc5724e0c0f3ebc751313d/src/boardBuilderDOM.js#L166",
              ],
            ]}
          />
          <ProjectCardHorizontal
            name="React CV Forms"
            repoLink={
              "https://github.com/samaripov/Project-CV-Application?tab=readme-ov-file"
            }
            imageSource={"./CVForm-Photos/form.png"}
            imageAlt={"Image of a form for a CV application."}
            projectLink={"https://aripov-cv-app.netlify.app/"}
            glossary={[
              [
                "... .includes()",
                "https://github.com/samaripov/Project-CV-Application/blob/fffc9f42cdae8fb77ec54b25db7239487d258e0b/src/components/applicant_property/ApplicantProperty.jsx#L6C15-L6C32",
              ],
              [
                "... .split()",
                "https://github.com/samaripov/Project-CV-Application/blob/fffc9f42cdae8fb77ec54b25db7239487d258e0b/src/components/applicant_property/ApplicantProperty.jsx#L7C27-L7C34",
              ],
              [
                "... .replace()",
                "https://github.com/samaripov/Project-CV-Application/blob/fffc9f42cdae8fb77ec54b25db7239487d258e0b/src/components/applicant_property/ApplicantProperty.jsx#L8",
              ],
              [
                "<select ... > ... </select>",
                "https://github.com/samaripov/Project-CV-Application/blob/fffc9f42cdae8fb77ec54b25db7239487d258e0b/src/components/finalview_or_edit/FinalViewOrSelectDegree.jsx#L26",
              ],
              [
                "<textarea ...> ... </textarea>",
                "https://github.com/samaripov/Project-CV-Application/blob/fffc9f42cdae8fb77ec54b25db7239487d258e0b/src/components/input/Input.jsx#L23C6-L23C11",
              ],
              [
                "Object.entries( ... )",
                "https://github.com/samaripov/Project-CV-Application/blob/fffc9f42cdae8fb77ec54b25db7239487d258e0b/src/helpers/isThereAMissingField.js#L5C29-L5C43",
              ],
              [
                "<PhoneInput ... />",
                "https://github.com/samaripov/Project-CV-Application/blob/fffc9f42cdae8fb77ec54b25db7239487d258e0b/src/components/sections/GeneralInformation.jsx#L36",
              ],
            ]}
          />
        </div>
      </div>
      <Footer color="#083853ff" />
    </div>
  );
}
