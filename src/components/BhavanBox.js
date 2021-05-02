import "./compstyle.css";
import style from "./styles/bhavanbox.module.css";

export default function BhavanBox({ name, imgSrc, redirecturl, fireFirebase }) {
  return (
    <div
      className={style.nav_links}
      onClick={() => fireFirebase(redirecturl)}
      className="bhavan-box"
    >
      <p className="box-title">{name}</p>
      <img className="bhavan-images" src={imgSrc} alt="bhavan pictures" />
    </div>
  );
}
