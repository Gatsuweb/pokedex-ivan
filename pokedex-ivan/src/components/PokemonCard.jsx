function PokemonCard () {
    const pokemon = pokemonList[0];
    return (
<figure>

    {pokemon.imgSrc ? (<img src={pokemon.imgSrc} />) : (<p>???</p>)}
    <figcaption><p>{pokemon.name}</p></figcaption>
</figure>
    )
    
}

const pokemonList = [
    {
      name: "Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Mew",
    },
    {
      name: "Capapuce",
          imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
  
  ];

export default PokemonCard;