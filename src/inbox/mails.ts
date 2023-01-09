export function compMailsInbox() {
  console.log("hola soy mailsIn");
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <div class="bandeja__mail mail1">
    <p>Un email</p>
    x
  </div>
  <div class="bandeja__mail mail2">
    <p>Otro email</p>
    x
  </div>`;

  return componentEl;
}
