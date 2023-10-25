import Article from "./Article";
import secretarybirdImg from "./images/secretarybird.jpg";
import secretarybirdText from "./texts/sec";

function Secretarybird() {
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

export default Secretarybird;

// return Article({
//   title: "Secretarybird",
//   image: secImg,
//   description: secretarybirdText,
//   author: "John Doe",
//   date: "2021-01-01",
//   backgroundColor: "#697827",
// });
