import categoryStyles from "./TechCategory.module.css";

export default function TechCategory({ name, color }) {
  const borderStyle = {
    border: `2px solid ${color}`,
  };
  const circleStyle = {
    background: `${color}`,
  };
  return (
    <div key={name} style={borderStyle} className={categoryStyles.container}>
      <div style={circleStyle}></div>
      <p>{name}</p>
    </div>
  );
}
