import "./App.css";
import Component from "../src/Profil/Component";
import Data from "./data.json";

function App() {
  return (
    <div className="App">
      <Component data={Data}></Component>
    </div>
  );
}

export default App;
