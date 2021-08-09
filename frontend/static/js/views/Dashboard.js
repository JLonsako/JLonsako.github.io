import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(params){
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml(){
    return `
      <h1 id="namebar">Joshua Lonsako</h1>
      <hr />
      <p>
        CODER | GAMER | FAKER
      </p>
    `;
  }
}
