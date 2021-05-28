import { ProxyState } from "../AppState.js";
import { pokemonDetailsService } from "../Services/PokemonDetailsService.js";

function _draw() {
  document.getElementById("details").innerHTML =
    ProxyState.pokemonDetail.detailTemplate;
}

export class PokemonDetailsController {
  constructor() {
    console.log("details controller");
    ProxyState.on("pokemonDetail", _draw);
  }

  getDetails(url) {
    pokemonDetailsService.getDetails(url);
  }
}
