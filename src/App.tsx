import "./App.css";

import { useState /*, useEffect*/ } from "react";

import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);



  function handleOnClick(type: boolean) {
    type
      ? setPokemonIndex(pokemonIndex + 1)
      : setPokemonIndex(pokemonIndex - 1);
  }

  return (
    <div>

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex ? (
        <button onClick={() => handleOnClick(false)}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={() => handleOnClick(true)}>Suivant</button>
 null}

      <PokemonCard pokemon={pokemonList[0]} />

    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {

    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {

    name: "mew",
  },
];

export default App;
