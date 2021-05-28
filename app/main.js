import { PokemonController } from "./Controllers/PokemonController.js";
import { PokemonDetailsController } from "./Controllers/PokemonDetailsController.js";

class App {
  pokemonController = new PokemonController();
  pokemonDetailsController = new PokemonDetailsController();
}

window["app"] = new App();
