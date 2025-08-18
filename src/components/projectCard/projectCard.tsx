import cardStyles from "./projectCard.module.css";
export default function ProjectCard({
  name,
  imagePath,
  imageAlt,
  description,
  link,
  techUsed,
}) {
  return (
    <div className={cardStyles.container}>
      <a href={link} target="_blank">
        <img src={imagePath} alt={imageAlt} />
        <div className={cardStyles.content}>
          <div className={cardStyles.title}>
            <p></p>
            <h1>{`${name} > View Repo`}</h1>
          </div>
          <p>{description}</p>
          <p>{techUsed}</p>
        </div>
      </a>
    </div>
  );
}
