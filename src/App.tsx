import "./App.css";

import { useState /*, useEffect*/ } from "react";

import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  function handleOnClick(id: number) {
    setPokemonIndex(id);
  }

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button onClick={() => handleOnClick(index)} key={index}>
            {pokemon.name}
          </button>
        ))}
      </nav>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
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

//...