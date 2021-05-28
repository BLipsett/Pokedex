import { ProxyState } from "../AppState.js";
import { pokeApi } from "./Axios.js";
import { PokemonDetail } from "../Models/PokemonDetail.js";

class PokemonDetailsService {
  constructor() {
    console.log("poke details service");
  }

  async getDetails(url) {
    let res = await pokeApi.get(url);
    console.log(res.data);

    ProxyState.pokemonDetail = new PokemonDetail(res.data);
  }
}

export const pokemonDetailsService = new PokemonDetailsService();
