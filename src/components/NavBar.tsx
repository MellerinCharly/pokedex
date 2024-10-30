import { useState } from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const previous = () => setPokemonIndex(pokemonIndex - 1);

  const next = () => setPokemonIndex(pokemonIndex + 1);

  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
      {pokemonIndex > 0 ? <button onClick={previous}>Previous</button> : null}
      {pokemonIndex < pokemonList.length ? (
        <button onClick={next}>Next</button>
      ) : null}
    </nav>
  );
}

export default NavBar;