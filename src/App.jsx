import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Properties from "./pages/properties/Properties";
import FacilityManagement from "./pages/facility/FacilityManagement";
import Contact from "./pages/contact/Contact";
import PropertyDetail from './pages/propertydetail/PropertyDetail'

function AppContent() {
  const location = useLocation();

  // Scroll to top on navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/facility-management" element={<FacilityManagement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property-detail/:id" element={<PropertyDetail/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
