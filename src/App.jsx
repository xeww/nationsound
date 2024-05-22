import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Faq from "./pages/Faq.jsx";
import Partners from "./pages/Partners.jsx";
import AllConcerts from "./pages/AllConcerts.jsx";
import NoPage from "./pages/NoPage.jsx";
import { getConcertsURL } from "./utils.js";
import "./App.css";

export const ConcertsContext = createContext(null);

async function fetchConcertsData() {
  const response = await fetch(getConcertsURL());
  const json = await response.json();
  return json;
}

export default function App() {
  const [concertsData, setConcertsData] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await fetchConcertsData();
      setConcertsData(data);
    })();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route
            path="/programmation"
            element={
              <ConcertsContext.Provider value={concertsData}>
                <AllConcerts />
              </ConcertsContext.Provider>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
