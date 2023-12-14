function NavBar ({ pokemonIndex, btnPrecedent, btnSuivant, pokemonList }) {

return (
    <>
        {pokemonIndex > 0 && (
          <button onClick={btnPrecedent}>Précédent</button>
        )}

        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={btnSuivant}>Suivant</button>
        )}
 </>
)}

export default NavBar