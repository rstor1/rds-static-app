import { type FC, useRef } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { CgPlayButton, CgPlayPause } from "react-icons/cg";


const Home: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

return (
  <div className="home-container">
    <header className="home-header"></header>
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
        <CgPlayButton size={32} />
      </button>
      <button onClick={handlePause} className="audio-play-btn" aria-label="Pause Audio">
        <CgPlayPause size={32} />
      </button>
    </footer>
  </div>
);
};

export default Home;