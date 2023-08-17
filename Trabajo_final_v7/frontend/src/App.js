import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import NosotrosPage from "./pages/NosotrosPage";
import HomePage from "./pages/HomePage";
//import NovedadItem from "./components/novedades/NovedadItem";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="contactos" element={<ContactoPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
