import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(params){
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml(){
    return `
      <h1>Welcome back Fam </h1>
      <p>
        DODODODODODODODODO
      </p>

    `;
  }
}
