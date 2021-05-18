import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Tarzan" animal="Cat" breed="Giercat" />
      <Pet name="Ekelmann" animal="Bird" breed="Dove" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
