import PropTypes from "prop-types";

function PokemonCard ({pokemon}) {
         
    return (
      <div>
      <img src = {pokemon.imgSrc} />
      <p>{pokemon.name}</p>
      </div>
    )
  }

  PokemonCard.propTypes = {
      pokemon: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  }

export default PokemonCard;