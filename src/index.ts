import { compBandejaInbox } from "./inbox/bandejaMails";
import { compMailsInbox } from "./inbox/mails";
import { compBandejaSent } from "./sent/bandejaMails";
import { compMailsSent } from "./sent/mails";

function handleRoute(route) {
  const bandejaContEl = document.querySelector(".main__bandeja-cont");
  const routes = [
    {
      path: "/inbox",
      handler: () => {
        compBandejaInbox;
      },
    },
    {
      path: "/sent",
      handler: () => {
        compBandejaSent;
      },
    },
  ];

  for (const r of routes) {
    console.log(r.path);

    if (r.path == route) {
      const el = r.handler();

      if (bandejaContEl != null) {
        if (bandejaContEl.firstChild) {
          bandejaContEl.firstChild.remove();
        }

        // bandejaContEl.appendChild(el);
      }
    }
  }
}
function goTo(path) {
  console.log(path);
  history.pushState({}, "", path);
  handleRoute(path);
}

function main() {
  const bandejaMailsContEl = document.querySelector(".bandeja__mails");

  const buttonInboxEl = document.querySelector(".inbox");
  const buttonSentEl = document.querySelector(".sent");

  if (buttonInboxEl && buttonSentEl != null) {
    buttonInboxEl.addEventListener("click", () => {
      goTo("/inbox");
    });

    buttonSentEl.addEventListener("click", () => {
      goTo("/sent");
    });
  }

  window.addEventListener("load", () => goTo("/"));
}
main();
