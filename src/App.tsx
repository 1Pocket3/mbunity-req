import { useState, useEffect } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactUsContainer from "./components/ContactContainer";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!showWelcomeScreen) {
      // После того как WelcomeScreen скрывается, через 500 миллисекунд появляются остальные компоненты
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }
  }, [showWelcomeScreen]);

  const handleStartClick = () => {
    setShowWelcomeScreen(false);
  };

  return (
    <div className="App">
      {showWelcomeScreen && <WelcomeScreen onStartClick={handleStartClick} />}
      {showContent && (
        <>
          <Navbar className="fade-in" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUsContainer />} />
          </Routes>
          <div className="w-full bg-black text-white px-2 relative">
            <Footer className="fade-in" />
          </div>
        </>
      )}
    </div>
  );
}
