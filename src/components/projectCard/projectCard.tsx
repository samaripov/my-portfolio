import TechCategory from "../techCategory/TechCategory";
import cardStyles from "./projectCard.module.css";

export default function ProjectCard({
  name,
  description,
  repoLink,
  techUsed,
  imageSource,
  imageAlt,
  projectLink = "",
}) {
  const categories = techUsed.map(([name, color]) => (
    <TechCategory name={name} color={color} key={name} />
  ));
  return (
    <div className={cardStyles.container}>
      <a href={projectLink} target="_blank">
        <img src={imageSource} alt={imageAlt} />
      </a>
      <a href={repoLink} target="_blank">
        <div className={cardStyles.content}>
          <div className={cardStyles.title}>
            <p></p>
            <div className={cardStyles.horizontalContainer}>
              <h1>{name}</h1>
              <h1 className={cardStyles.view}>- View Repo</h1>
            </div>
          </div>
          <div className={cardStyles.horizontalContainer}>{categories}</div>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
