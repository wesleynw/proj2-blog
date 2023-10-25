// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import acornPic from "./assets/acorn-woodpecker.jpg";
import secretaryPic from "./assets/secretary-bird.png";
import ruddyPic from "./assets/ruddy-duck.png";
import "./App.css";
import Headline from "./Headline.jsx";
import { Secretarybird, AcornWoodpecker, RuddyDuck } from "./Birds.jsx";

function App() {
  return (
    <>
      <h1>Louisa & Wesley&apos;s bird blog</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/secretary-bird" element={<Secretarybird />} />
          <Route path="/acorn-woodpecker" element={<AcornWoodpecker />} />
          <Route path="/ruddy-duck" element={<RuddyDuck />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
