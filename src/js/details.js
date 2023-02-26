/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the lsit to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */

const detailsHeader = document.querySelector(".details-header");
const detailsContent = document.querySelector(".details-content");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

async function fetchPokemonDetails() {
  try {
    const response = await fetch(url);
    const pokemonDetails = await response.json();
    document.title = pokemonDetails.name + " | Pokémon ";

    showPokemonDetails(pokemonDetails);
  } catch (error) {
    console.log(error);
  }
}

function showPokemonDetails(pokemon) {
  detailsHeader.innerHTML = pokemon.name.toUpperCase();

  let abilityList = "<h4>Abilities</h4>";
  for (let i = 0; i < pokemon.abilities.length; i++) {
    let ability = pokemon.abilities[i].ability.name;
    abilityList += `<li>${ability}</li>`;
  }

  let typeList = "<h4>Types</h4>";
  for (let i = 0; i < pokemon.types.length; i++) {
    let type = pokemon.types[i].type.name;
    typeList += `<li>${type}</li>`;
  }

  detailsContent.innerHTML = `
    <img src="${pokemon.sprites.front_default}" class ="image-pokemon"aria-label =" Photo of Pokémon" />
    <ul>${abilityList}</ul>
    <ul>${typeList}</ul>
  `;
}

fetchPokemonDetails();
