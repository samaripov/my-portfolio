import termStyles from "./glossaryTerm.module.css";
export default function GlossaryTerm({ name, link }) {
  return (
    <div className={termStyles.container}>
      <a href={link} target="_blank">
        {name && (
          <p>
            <span>#</span>
            {name}
          </p>
        )}
      </a>
    </div>
  );
}
