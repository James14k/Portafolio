import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
// import Testimonial from './components/Testimonial';
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <ThemeToggle />
        <Header />
        <About />
        <Qualification />
        <Skills />
        <Services />
        <Portfolio />
        <Certificates />
        {/* <Testimonial /> */}
        <Blog />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
