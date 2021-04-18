import logo from "./logo.png";
import "./compstyle.css";
import ImageSlider from "./ImageSlider";

export default function Home() {
  return (
    <div className="home-container">
      <div className="header-section">
        <img className="logo" src={logo} alt="visva bharati logo" />
        <p className="main-title">Visva Bharati Virtual Library</p>
      </div>
      <ImageSlider />
    </div>
  );
}
