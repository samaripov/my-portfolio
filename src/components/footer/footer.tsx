import footerStyle from "./footer.module.css";
export default function Footer({ color }) {
  return (
    <div style={{ background: color }} className={footerStyle.footer}>
      <h1>Sirojiddin Aripov - Portfolio - 2025 </h1>
    </div>
  );
}
