import "./App.css";
import Navigation from "./components/Navigation";
import BookmarkManager from "./components/BookmarkManager";
import Features from "./components/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<BookmarkManager />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
