export function compBandejaSent() {
  console.log("hola soy sent");
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <div class="bandeja">
    <h2 class="bandeja__title">Sent</h2>

    <div class="bandeja__mails">
    </div>
  </div>`;
  return componentEl;
}
