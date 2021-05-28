export class Pokemon {
  constructor({ name, url }) {
    this.name = name;
    this.url = url;
  }

  get pokemonTemplate() {
    return `
      <div>
        <h5 id="pokemon" onclick="app.pokemonDetailsController.getDetails('${this.url}')">${this.name}</h5>
      </div>
      `;
  }
}
