import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import LinkSocmed from "./components/LinkSocmed";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="link" element={<LinkSocmed />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
