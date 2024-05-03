import "./App.css";
import Footer from "./pages/footer/Footer";
import HeroPage from "./pages/hero/HeroPage";
import LandingPage from "./pages/landing/LandingPage";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
