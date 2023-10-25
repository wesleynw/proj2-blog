import Article from "./Article";
import secretarybirdImg from "./images/secretarybird.jpg";
import acornwoordpeckerImg from "./images/acorn_woodpecker.jpg";
import ruddyduckImg from "./images/ruddy_duck.jpg";
import secretarybirdText from "./texts/secretarybird";
import acornwoodpeckerText from "./texts/acorn_woodpecker";
import ruddyduckText from "./texts/ruddy_duck";

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

export function RuddyDuck() {
  return (
    <Article
      title="Ruddy Duck"
      image={ruddyduckImg}
      description={ruddyduckText}
      author="Louisa Ng"
      date="October 25, 2023"
      backgroundColor="#65A1C9"
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
