import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Faq from "./pages/Faq.jsx";
import Partners from "./pages/Partners.jsx";
import NoPage from "./pages/NoPage.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
