import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
