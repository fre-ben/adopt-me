import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Tarzan",
      animal: "Cat",
      breed: "Giercat",
    }),
    React.createElement(Pet, {
      name: "Ekelmann",
      animal: "Bird",
      breed: "Dove",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
