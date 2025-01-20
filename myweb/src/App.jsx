import "./App.css";
import Home from "./Pages/Home";
import Navibar from "./components/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Link from "./Pages/Link";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/link" element={<Link />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
