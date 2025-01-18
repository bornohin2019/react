import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </div>
      <p>hello</p>
    </>
  )
}

export default App
