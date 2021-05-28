import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";

function _draw() {
  let template = "";
  let pokemonElem = document.getElementById("app");
  ProxyState.pokemon.forEach((p) => (template += p.pokemonTemplate));
  pokemonElem.innerHTML = template;
}
export class PokemonController {
  constructor() {
    console.log("controller");
    this.getPokemon();
    ProxyState.on("pokemon", _draw);
  }

  getPokemon() {
    pokemonService.getPokemon();
  }
}
