import { useState } from "react";

function NavBar ({ pokemonIndex, handlePokemonCLick, pokemonList }) {

return (
    <>
    {pokemonList.map ((pokemonList, index) => (

      <button key={index} 
      onClick={ () => handlePokemonCLick(index)}>
      {pokemonList.name}
      </button>
    )

    )}
 </>
)}

export default NavBar