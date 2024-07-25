import "./App.css";
import Navigation from "./components/Navigation";
import BookmarkManager from "./components/BookmarkManager";
import Features from "./components/Features";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <BookmarkManager path="/" element={<BookmarkManager />} />
            <Features path="/features" element={<Features />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
