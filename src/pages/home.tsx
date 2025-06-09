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
      <main className="home-main">
        <div className="top-left-link-container">
          <Link to="/about" className="about-circle-link">
            A
          </Link>
        </div>
        <h1>Welcome to the Home Page!</h1>
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