import React from "react";
import "./styles.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">Header</header>
      <main className="home-main">
        <h1>Welcome to the Home Page!</h1>
      </main>
      <footer className="home-footer">Footer</footer>
    </div>
  );
};

export default Home;