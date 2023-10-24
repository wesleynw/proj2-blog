import reactLogo from "./assets/react.svg";
import "./App.css";
import Article from "./Article";

function App() {
  return Article({
    title: "Secretarybird",
    image: reactLogo,
    description: "This is a description",
    author: "John Doe",
    date: "2021-01-01",
  });
}

export default App;
