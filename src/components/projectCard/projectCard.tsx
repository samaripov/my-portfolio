import TechCategory from "../techCategory/TechCategory";
import cardStyles from "./projectCard.module.css";

export default function ProjectCard({
  name,
  imagePath,
  imageAlt,
  description,
  link,
  techUsed,
}) {
  const categories = techUsed.map(([name, color]) => (
    <TechCategory name={name} color={color} key={name} />
  ));
  return (
    <div className={cardStyles.container}>
      <a href={link} target="_blank">
        <img src={imagePath} alt={imageAlt} />
        <div className={cardStyles.content}>
          <div className={cardStyles.title}>
            <p></p>
            <h1>{`${name} > View Repo`}</h1>
          </div>
          <div className={cardStyles.horizontalContainer}>{categories}</div>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
