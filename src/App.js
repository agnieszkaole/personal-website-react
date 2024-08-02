import React from "react";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />

        <About />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
