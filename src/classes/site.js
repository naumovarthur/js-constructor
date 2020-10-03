// @ts-check
export class Site {
  /**
   * @param {string} selector
   */
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  /**
   * @param {any} model
   */
  render(model) {
    this.$el.innerHTML = "";
    model.forEach((block) => {
      this.$el.insertAdjacentHTML("beforeend", block.toHTML());
    });
  }
}
