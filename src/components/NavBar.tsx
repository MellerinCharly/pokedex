interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  function handleOnClick(id: number) {
    if (id === 3) alert("Pika Pikachuuuuuuuu !!!!!!");
    setPokemonIndex(id);
  }
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => handleOnClick(index)} key={index}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;