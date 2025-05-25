import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Careers from './components/Careers/Careers';
import OurLeaders from './components/OurLeaders/OurLeaders';
import Clients from './components/Clients/Clients';
import OurPresence from './components/OurPresence/OurPresence';
import AboutPage from './components/About/AboutPage'; // Detailed About Us Page
import ProjectPage from './components/Projects/ProjectsPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ContactPage from './components/Contact/ContactPage';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Navbar /> {/* ⬅️ Always show Navbar */}
        <ScrollToTop />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Projects />
              <OurPresence />
              <OurLeaders />
              <Clients />
              <Contact />
            </>
          } />

          {/* Other Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
