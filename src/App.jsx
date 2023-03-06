import { Routes, Route } from "react-router-dom";

import './App.scss';

import Navbar from './components/Navbar/Navbar';

import HeaderSection from './sections/HeaderSection/HeaderSection';
import GallerySection from './sections/GallerySection/GallerySection';
import ContactUsSection from './sections/ContactUsSection/ContactUsSection';
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import AboutUsSection from "./sections/AboutUsSection/AboutUsSection";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <HeaderSection />
            <AboutUsSection />
            <GallerySection />
            <ContactUsSection />
            <Footer />
            <Modal />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App;
