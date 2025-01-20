import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./componets/Headers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
