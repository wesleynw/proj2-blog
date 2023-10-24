import acornPic from "./assets/acorn-woodpecker.jpg";
import secretaryPic from "./assets/secretary-bird.png";
import ruddyPic from "./assets/ruddy-duck.png";
import "./App.css";
// import Article from "./Article";
// import secImg from "./images/sec1.jpg";
// import secretarybirdText from "./texts/sec.js";
// import Headline from "./Headline.jsx";

function App() {
  // return Article({
  //   title: "Secretarybird",
  //   image: secImg,
  //   description: secretarybirdText,
  //   author: "John Doe",
  //   date: "2021-01-01",
  //   backgroundColor: "#697827",
  // });
  return (
    <>
      <div>
        <h1>Louisa & Wesley&apos;s bird blog</h1>

        <Headline
          img={acornPic}
          title="Acorn Woodpecker"
          subtitle="certainly one of the birds ever"
          origin="Southwest US"
          url="./bird.html"
        />

        <Headline
          img={secretaryPic}
          title="Secretary Bird"
          subtitle="the erm... the uh... secretary bird is a large, mostly terrestrial bird of prey"
          origin="Africa"
        />

        <Headline
          img={ruddyPic}
          title="Ruddy Duck"
          subtitle="look at this doodad"
          origin="North America"
        />
      </div>
    </>
  );
}

export default App;
