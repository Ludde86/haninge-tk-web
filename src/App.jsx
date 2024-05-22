import "./App.css";
import Footer from "./pages/footer/Footer";
import HeroPage from "./pages/hero/HeroPage";
import LandingPage from "./pages/landing/LandingPage";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
