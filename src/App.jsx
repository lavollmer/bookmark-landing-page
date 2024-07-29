import "./App.css";
import Navigation from "./components/Navigation";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import BookmarkManager from "./components/BookmarkManager";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <BookmarkManager />
        <Features />
        <Extension />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
