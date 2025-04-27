import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing/LandingPage";
import About from "./About/About";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Services from "./Services/Services";
import MyWork from "./MyWork/MyWork";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import MyWork from "./pages/MyWork";
// import Contact from "./pages/Contact";
// import Book from "./pages/Book";

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/my-work" element={<MyWork />} />
        {/*  <Route path="/my-work" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
