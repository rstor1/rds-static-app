import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home'
import { About } from './pages/about';
import { Dummy } from "./pages/dummy";
import { BlackHole } from "./pages/blackHole";

function App() {

  return (
    <BrowserRouter basename="/rds-static-app/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/black-hole" element={<BlackHole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
