function PokemonForm(pokemon, setPokemon, inputText, setInputText) {

    function handleInput(e) {
        setInputText(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        setPokemon([...pokemon, {text: inputText, completed:false}])
        setInputText('')
      }

    return(
        <>
        <label >Search for a Pokémon</label>
        <input type="text" placeholder='Pokémon'/>
        </>
    )
}

export default PokemonForm