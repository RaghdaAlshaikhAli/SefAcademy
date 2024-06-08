import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Result, Home, ContactUs, AboutUs, AddNew } from "../pages";
import TopButton from "../components/TopScrollButton";
import Announcement from "../components/Announcement";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Whatsup from "../components/Whatsup";
import Splash from "../pages/splash/splash";
import NotFound from "../pages/NotFoundPage";

const Routerc = () => {
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/aboutus":
        setActiveItem("About Us");
        break;
      case "/contactus":
        setActiveItem("Contact");
        break;
      case "/result":
        setActiveItem("Result");
        break;
      case "/addnew":
        setActiveItem("Add New");
        break;
      default:
        setActiveItem("Home");
    }
  }, [location]);

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  return (
    <>
      {loading && <Splash onAnimationEnd={() => setLoading(false)} />}
      {!loading && (
        <>
          <Announcement />
          <Header activeItem={activeItem} onNavigate={handleNavigation} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/addnew" element={<AddNew />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Whatsup />
          <TopButton />
        </>
      )}
    </>
  );
};

export default Routerc;
