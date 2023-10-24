import "./App.css";
import Article from "./Article";
import secImg from "./images/sec1.jpg";
import secretarybirdText from "./texts/sec.js";

function App() {
  return Article({
    title: "Secretarybird",
    image: secImg,
    description: secretarybirdText,
    author: "John Doe",
    date: "2021-01-01",
    backgroundColor: "#697827",
  });
}

export default App;
