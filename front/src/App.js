import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
import PageClient from './pages/PageClient';
import SuppClient from './pages/SuppClient';
import MajClient from './pages/MajClient';
import PageAjout from './pages/PageAjout';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/clients/:id" name="PageClient" element={<PageClient />} />
        <Route path="/clients/supp/:id" element={<SuppClient />} />
        <Route path="/clients/modif/:id" element={<MajClient />} />
        <Route path="/clients/ajout" element={<PageAjout />} />



        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
