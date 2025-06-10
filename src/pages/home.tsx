import { type FC, useEffect, useRef } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { CgPlayPause } from "react-icons/cg";
import { CiPlay1 } from "react-icons/ci";
import { drawParabolicCurves } from "../utils/drawGeoLines";


const Home: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

    useEffect(() => {
    if (canvasRef.current) {
      drawParabolicCurves(canvasRef.current);
    }
  }, []);

return (
  <div className="home-container">
    <header className="home-header"></header>
    <div className="main-flex-row">
<p
  style={{
    margin: 0,
    padding: 0,
    transform: "translateX(-20rem)" // Adjust value as needed
  }}
>
  <canvas
    className="geoLineCanvas"
    ref={canvasRef}
    id="canvas"
    width={700}
    height={600}
  >
    Your browser does not support the HTML5 canvas tag.
  </canvas>
</p>
    <div className="welcome-wrapper">
      <section className="welcome-section">
        <div className="dividerTop">&nbsp;</div>
        <h2 className="welcomeTitle">Welcome</h2>
        <div className="dividerMiddle">&nbsp;</div>
        <p className="welcomeText">
          Welcome to my personal node of experimentation and interaction. The design you see to the left is line-stitching, which creates parabolic curves using only straight lines drawn with JavaScript inspired by inked line art I did some years back. Have a look around and enjoy.<br />
          <br />
          Technology: React - Typescript - Vite - SCSS
        </p>
        <div className="dividerBottom">&nbsp;</div>
      </section>
    </div>
    </div>
    <main className="home-main">
      <div className="top-left-link-container">
        <Link to="/about" className="about-circle-link">
          A
        </Link>
      </div>
    </main>
    <footer className="home-footer">
      <audio
        ref={audioRef}
        src="http://ice1.somafm.com/deepspaceone-128-mp3"
        autoPlay
      />
      <button onClick={handlePlay} className="audio-play-btn" aria-label="Play Audio">
        <CiPlay1 size={20}/>
      </button>
      <button onClick={handlePause} className="audio-play-btn" aria-label="Pause Audio">
        <CgPlayPause size={20} />
      </button>
    </footer>
  </div>
);
};

export default Home;