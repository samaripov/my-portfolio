import footerStyle from "./footer.module.css";
export default function Footer({ color }) {
  return (
    <div style={{ background: color }} className={footerStyle.footer}>
      <h1>Sam Aripov's Portfolio 2025 </h1>
    </div>
  );
}
