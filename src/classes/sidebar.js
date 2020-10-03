import { block } from "../utils";
import { TextBlock, TitleBlock } from "./blocks";

// @ts-check
export class Sidebar {
  /**
   * Set sidebar by selector
   * @param {string} selector Tag, Class or ID of element
   */
  constructor(selector, onNewBlock) {
    this.$el = document.querySelector(selector);
    this.update = onNewBlock;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.add.bind(this));
  }

  add(e) {
    e.preventDefault();

    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;

    let newBlock;

    if (type == "text") {
      newBlock = new TextBlock(value, { styles });
    } else if (type == "title") {
      newBlock = new TitleBlock(value, { styles });
    }

    this.update(newBlock);

    e.target.value.value = "";
    e.target.styles.value = "";
  }

  get template() {
    return [block("text"), block("title")].join("");
  }
}
