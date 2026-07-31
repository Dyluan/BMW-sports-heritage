import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Legends from './pages/Legends';
import GloryWall from "./pages/GloryWall";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legends" element={<Legends />} />
        <Route path="/glory-wall" element={<GloryWall />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
