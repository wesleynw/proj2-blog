import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import acornPic from "./assets/acorn-woodpecker.jpg";
import secretaryPic from "./assets/secretary-bird.png";
import ruddyPic from "./assets/ruddy-duck.png";
import "./App.css";
import Headline from "./Headline.jsx";
import Secretarybird from "./Birds.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Louisa & Wesley&apos;s bird blog</h1>

        <nav>
          <Headline
            img={acornPic}
            title="Acorn Woodpecker"
            subtitle="certainly one of the birds ever"
            origin="Southwest US"
            url="/acorn-woodpecker"
          />
          <Headline
            img={secretaryPic}
            title="Secretary Bird"
            subtitle="the erm... the uh... secretary bird is a large, mostly terrestrial bird of prey"
            origin="Africa"
            url="/secretary-bird"
          />
          <Headline
            img={ruddyPic}
            title="Ruddy Duck"
            subtitle="look at this doodad"
            origin="North America"
            url="/ruddy-duck"
          />
        </nav>
      </div>

      <Routes>
        <Route path="/acorn-woodpecker" element={<Secretarybird />}></Route>
        <Route path="/secretary-bird"></Route>
        <Route path="/ruddy-duck"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
