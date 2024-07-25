import "./App.css";
import Navigation from "./components/Navigation";
import BookmarkManager from "./components/BookmarkManager";
import Features from "./components/Features";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <BookmarkManager />
        <Features />
      </div>
    </>
  );
}

export default App;
