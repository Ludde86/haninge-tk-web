import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import Tennisskolan from "./routes/tennisskolan/Tennisskolan.jsx";
import Navbar from "./pages/navbar/Navbar.jsx";
import { Home } from "lucide-react";
import Tavling from "./routes/tavling/Tavling.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar />
    {/*
    <input
        style={{ position: "fixed", bottom: "2rem", left: "2rem" }}
        type="color"
      />
     */}
    <Link to={"/"}>
      <Home
        size={40}
        style={{ position: "fixed", bottom: "2rem", left: "2rem" }}
      />
    </Link>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="tennisskolan" Component={Tennisskolan} />
      <Route path="tavling" Component={Tavling} />
    </Routes>
  </BrowserRouter>
);
