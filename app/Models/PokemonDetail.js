export class PokemonDetail {
  // NOTE could not get the image top work with destructuring
  //   constructor({ name, height, weight, user, types, img }) {
  //     this.name = name;
  //     this.height = height;
  //     this.weight = weight;
  //     this.user = user;
  //     this.types = types;
  //     this.img = img || sprites;
  //   }

  constructor(data) {
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.user = data.user;
    this.types = data.types;
    this.img = data.img || data.sprites.front_shiny;
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
                <img src="${this.img}"> </img>

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
