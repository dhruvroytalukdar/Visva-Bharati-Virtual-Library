import "./compstyle.css";

export default function BhavanBox({ name, imgSrc }) {
  return (
    <div className="bhavan-box">
      <p className="box-title">{name}</p>
      <img className="bhavan-images" src={imgSrc} alt="bhavan pictures" />
    </div>
  );
}
