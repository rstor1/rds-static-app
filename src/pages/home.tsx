import { type FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CgPlayPause } from "react-icons/cg";
import { CiPlay1 } from "react-icons/ci";
import { drawParabolicCurves } from "../utils/drawGeoLines";
import "./styles.scss";

export const Home: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 700, height: 600 });

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  useEffect(() => {
    function handleResize() {
      const width = Math.max(300, Math.min(window.innerWidth * 0.7, 900));
      const height = Math.max(200, Math.min(window.innerHeight * 0.8, 900));
      const size = Math.min(width, height);
      setCanvasSize({ width: size, height: size });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      drawParabolicCurves(canvasRef.current);
    }
  }, [canvasSize]);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="left-menu-container">
          <Link to="/about" className="about-circle-link">
            A
          </Link>
          <Link to="/black-hole" className="black-hole-circle-link">
            BH
          </Link>
          <Link to="/dummy" className="dummy-circle-link">
            D
          </Link>
        </div>
      </header>
      <main className="home-main">
        <div className="main-flex-row">
          <p className="canvas-container">
            <canvas
              className="geoLineCanvas"
              ref={canvasRef}
              id="canvas"
              width={canvasSize.width}
              height={canvasSize.height}
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
                Welcome to my personal node of experimentation and interaction. The design you see to the left (or below depending on screen size) is line-stitching, which creates parabolic curves using only straight lines drawn with TypeScript. Inspired by inked line art I did some years back. Have a look around and enjoy.<br />
                <br />
                Technology: React - Typescript - Vite - SCSS
              </p>
              <div className="dividerBottom">&nbsp;</div>
            </section>
          </div>
        </div>
      </main>
      <footer className="home-footer">
        <audio
          ref={audioRef}
          src="http://ice1.somafm.com/deepspaceone-128-mp3"
          autoPlay
        />
        <button onClick={handlePlay} className="audio-play-btn" aria-label="Play Audio">
          <CiPlay1 size={20} />
        </button>
        <button onClick={handlePause} className="audio-play-btn" aria-label="Pause Audio">
          <CgPlayPause size={20} />
        </button>
      </footer>
    </div>
  );
};