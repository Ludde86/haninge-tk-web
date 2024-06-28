import "./App.css";
import BackgroundLogo from "./components/background/BackgroundLogo";
import CardsPage from "./pages/card/CardsPage";
import DescPage from "./pages/desc/DescPage";
import Desc2Page from "./pages/desc2/Desc2Page";
import Footer from "./pages/footer/Footer";
import HeroPage from "./pages/hero/HeroPage";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <>
      <BackgroundLogo />

      <HeroPage />
      <DescPage />
      <LandingPage />
      <Desc2Page />
      <CardsPage />
      <Footer />
    </>
  );
}

export default App;
