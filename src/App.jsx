import "./App.css";
import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Faq from "./pages/Faq.jsx";
import Partners from "./pages/Partners.jsx";
import AllConcerts from "./pages/AllConcerts.jsx";
import NoPage from "./pages/NoPage.jsx";
import { getConcertsURL } from "./utils/utils.js";

export const ConcertsContext = createContext(null);

export default function App() {
  const [concertsData, setConcertsData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(getConcertsURL());
      const json = await response.json();
      setConcertsData(json);
    })();
  }, []);

  return (
    <>
      <ConcertsContext.Provider value={concertsData}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />

            <Route path="/faq" element={<Faq />} />

            <Route path="/partenaires" element={<Partners />} />

            <Route path="/programmation" element={<AllConcerts />} />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ConcertsContext.Provider>
    </>
  );
}
