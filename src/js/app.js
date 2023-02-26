
// Kilder: https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/ - Stor forbokstav

const resultContainer = document.querySelector(".results");
const loader = document.querySelector("#loader");

const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

async function fetchPokemon() {
  loader.innerHTML = ` 
    <div class="wrapper">
    <div class="pokeball"></div>
    </div>
  `;

  try {
    const response = await fetch(url);
    const json = await response.json();

    document.title = "Pokémon";

    const pokemons = json.results;

    if (pokemons.length > 0) {
      loader.innerHTML = "";
    }

    pokemons.forEach(async function (pokemon) {
      const pokemonUrl = pokemon.url;
      const pokemonResponse = await fetch(pokemonUrl);
      const pokemonData = await pokemonResponse.json();

      resultContainer.innerHTML += `
      <div class="details">
         <a href="/details.html?id=${pokemonData.name}" class="card">
           
             <img src="${pokemonData.sprites.front_default}" class="image" aria-label =" Photo of Pokémon"/>
             <div class="card-details">
             <h4 class="name">${
               pokemonData.name.charAt(0).toUpperCase() +
               pokemonData.name.slice(1)
             }</h4>
             <ul>
               <li>weight: ${pokemonData.weight}</li>
               <li>height: ${pokemonData.height}</li>
             </ul>
             
             <button class="button-card"> More info </button>
           </div>
         </a> 
         <div/>
       `;
    });
  } catch (error) {
    console.log(error);
    resultContainer.innerHTML = "Error: " + error.message;
  }
}

fetchPokemon();
