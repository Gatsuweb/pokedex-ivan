function PokemonCard ({pokemon}) {
    console.log(pokemon)
         
    return (
      <div>
      <img src = {pokemon.imgSrc} />
      <p>{pokemon.name}</p>
      </div>
    )
  }

export default PokemonCard;