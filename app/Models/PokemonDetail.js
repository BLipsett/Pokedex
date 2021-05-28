export class PokemonDetail {
  constructor({ name, height, weight, user, types, img }) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.user = user;
    this.types = types;
    this.img = img || sprites.front_shiny;
  }

  get detailTemplate() {
    return `
      <div class="card">
        <div class="card-body">
            <div class="card-title">
                <span><p>Pokemon: ${this.name}</p></span>
                <span><p>Weight: ${this.weight}</p></span>
                <span><p>Height: ${this.height}</P></span>
                <span><p>Types: ${this.Types}</p></span>
                <img>${this.img} </img>

            </div>
        </div>
    </div>
      `;
  }
  get Types() {
    let template = "";

    this.types.forEach((t) => {
      template += t.type.name + " ";
    });
    return template;
  }
}
