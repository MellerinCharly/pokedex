interface pokemonProps {
  name: string;
  imgSrc?: string;
}
function PokemonCard({ name, imgSrc }: pokemonProps) {
  return (
    <div>
      <figure>
        {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}
export default PokemonCard;