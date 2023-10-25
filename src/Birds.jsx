import Article from "./Article";
import secretarybirdImg from "./images/secretarybird.jpg";
import acornwoordpeckerImg from "./images/acorn_woodpecker.jpg";
import secretarybirdText from "./texts/sec";
import acornwoodpeckerText from "./texts/acorn_woodpecker";

export function Secretarybird() {
  return (
    <Article
      title="Secretarybird"
      image={secretarybirdImg}
      description={secretarybirdText}
      author="Louisa Ng"
      date="October 25, 2023"
      backgroundColor="#697827"
    />
  );
}

export function AcornWoodpecker() {
  return (
    <Article
      title="Acorn Woodpecker"
      image={acornwoordpeckerImg}
      description={acornwoodpeckerText}
      author="Louisa Ng"
      date="October 25, 2023"
      backgroundColor="#A88569"
    />
  );
}

// return Article({
//   title: "Secretarybird",
//   image: secImg,
//   description: secretarybirdText,
//   author: "John Doe",
//   date: "2021-01-01",
//   backgroundColor: "#697827",
// });
