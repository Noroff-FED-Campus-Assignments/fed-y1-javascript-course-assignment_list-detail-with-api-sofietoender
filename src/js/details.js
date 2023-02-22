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


//  const queryString = document.location.search;
//  const params = new URLSearchParams(queryString);
//  const id = params.get("name");
 
//  const url = `https://pokeapi.co/api/v2/pokemon?name=${id}`;
 
//  async function fetchPokemon() {
//    const response = await fetch(url);
//    const json = await response.json();
 
//    console.log(json);
//  }
 
//  fetchPokemon();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
const pokemonName = document.querySelector(".title");
const imageOfPokemon = document.querySelector(".image-pokemon");
const abilityHtml = document.querySelector(".abilities");
const statHtml = document.querySelector(".stats");

async function fetchPokemonDetails() {
  try {
    const response = await fetch(url);
    const pokemonDetails = await response.json();

    showPokemonDetails(pokemonDetails);
  } catch (error) {
    console.log(error);
  }
}

function showPokemonDetails(pokemonDetails) {
  console.log(pokemonDetails);
  pokemonName.innerHTML = pokemonDetails.name;
  imageOfPokemon.src = pokemonDetails.sprites.front_default;
  for (let i = 0; i < pokemonDetails.abilities.length; i++) {
    let ability = pokemonDetails.abilities[i].ability.name;
    let abilityList = `<li>${ability}</li>`;
    abilityHtml.innerHTML += abilityList;
  }
  for (let i = 0; i < pokemonDetails.stats.length; i++) {
    let stat = pokemonDetails.stats[i].stat.name;
    let baseStat = pokemonDetails.stats[i].base_stat;
    let statList = `<li>${stat}: ${baseStat}</li>`;
    statHtml.innerHTML += statList;
  }
}

fetchPokemonDetails();



 
 


