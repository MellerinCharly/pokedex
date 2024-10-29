interface PokemonCard {
  name: string;
  imgSrc?: string;
}

// function PokemonCard({ pokemon }) {
//   return (
//     <figure>
//       {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>"???"</p>}
//       <figcaption>{pokemon.name}</figcaption>
//     </figure>
//   );
// }


function PokemonCard({ name, imgSrc }) {
  return (
    <figure>
      {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}



export default PokemonCard;
