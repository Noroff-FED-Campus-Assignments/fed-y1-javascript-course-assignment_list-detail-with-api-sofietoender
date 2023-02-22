/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */



 const resultContainer = document.querySelector(".results");

 const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
 
 async function fetchPokemon () {
   try {
     const response = await fetch(url);
     const json = await response.json();
 
     console.log(json);
 
     resultContainer.innerHTML = "";
 
     const pokemons = json.results;
 
     pokemons.forEach(async function (pokemon) {
       const pokemonResponse = await fetch(pokemon.url);
       const pokemonData = await pokemonResponse.json();
       
       resultContainer.innerHTML += `
         <a href="index.html?id=${pokemonData.name}" class="card">
           <div class="details">
             <img src="${pokemonData.sprites.front_default}" class="image"/>  
             <h4 class="name">${pokemonData.name}</h4> 
           </div>
         </a>
       `;
     });
   } catch (error) {
     console.log(error);
     resultContainer.innerHTML = "Error: " + error.message;
   }
 }
 
 fetchPokemon();
 


