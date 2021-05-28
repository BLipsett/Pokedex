import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./Axios.js";

class PokemonService {
  constructor() {
    console.log("service");
  }

  async getPokemon() {
    let res = await pokeApi.get();
    console.log(res.data);
    ProxyState.pokemon = res.data.results.map((p) => new Pokemon(p));
  }
}

export const pokemonService = new PokemonService();
