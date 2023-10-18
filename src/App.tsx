import { useState, useEffect } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import ContactUsContainer from "./components/ContactContainer";


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
          <ContactUs className="fade-in" />
          <ContactUsContainer className="fade-in" />
          <div className="w-full bg-black text-white px-2 relative">
            <Footer className="fade-in" />
          </div>
        </>
      )}
    </div>
  );
}
