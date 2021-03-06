import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Pet from "./Pet";
import Results from "./Results";

const ANIMALS = ["Bird", "Cat", "Dog", "Rabbit", "Reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
      >
        <label className="search-label" htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="search-control"
          />
        </label>
        <label className="search-label" htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
            className="search-control"
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label className="search-label" htmlFor="breed">
          Breed
          <select
            className="search-control disabled:opacity-50"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <label className="search-label" htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
            className="search-control"
          >
            <option value="gold">Gold</option>
            <option value="violet">Violet</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Mediumorchid</option>
          </select>
        </label>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
