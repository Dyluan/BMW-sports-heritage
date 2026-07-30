import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Legends from './pages/Legends';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legends" element={<Legends />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
