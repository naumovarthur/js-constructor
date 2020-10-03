export function row(content, styles = "") {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
  if (typeof styles == "string") return styles;
  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}`)
    .join(";");
}

/**
 * @param {string} type
 */
export function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value" />
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles" />
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `;
}
