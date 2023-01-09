export function compBandejaInbox() {
  console.log("hola soy inbox");
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <div class="bandeja">
    <h2 class="bandeja__title">Inbox</h2>

    <div class="bandeja__mails">
    </div>
  </div>`;
  return componentEl;
}
