import "./App.css";
import CardsPage from "./pages/card/CardsPage";
import Footer from "./pages/footer/Footer";
import HeroPage from "./pages/hero/HeroPage";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <>
      <HeroPage />
      <LandingPage />
      <CardsPage />
      <Footer />
    </>
  );
}

export default App;
