// Importa las funciones de cada vista
import { RegisterView } from "./views/Register.js";
import { ProfileView } from "./views/Profile.js";
import { ChooseView } from "./views/Choose.js";
import { AvatarView } from "./views/Avatar.js";
import { GameView } from "./views/Game.js";
import { TournamentView } from "./views/Tournament.js";
import { ChatView } from "./views/Chat.js";
import { HomeView } from "./views/Home.js";

// Define las interfaces y el estado global
interface Player {
  alias: string;
  user: string;
  avatar: number;
}
interface State {
  player: Player;
}
const state: State = {
  player: { alias: "", user: "", avatar: 0 }
};

// La función navigate ahora debe ser exportada para que las vistas puedan importarla
export function navigate(path: string): void {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
  }
  router();
}

// El router ahora es mucho más limpio
function router(): void {
  const app = document.getElementById("app");
  if (!app) return;

  const route = window.location.pathname;

  switch (route) {
    case "/register":
      RegisterView(app, state);
      break;
    case "/profile":
      ProfileView(app, state);
      break;
    case "/choose":
      ChooseView(app);
      break;
    case "/avatar":
      AvatarView(app, state);
      break;
    case "/game":
      GameView(app, state);
      break;
    case "/tournament":
      TournamentView(app, state);
      break;
    case "/chat":
      ChatView(app, state);
      break;
    default: // Home
      HomeView(app, state);
      break;
  }
  updateHeaderFooterVisibility(route);
}

// Funciones de utilidad y de inicialización
function updateHeaderFooterVisibility(route: string) {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  if (!header || !footer) return;

  const hiddenRoutes = ["/register", "/profile", "/choose", "/avatar"];
  if (hiddenRoutes.includes(route)) {
    header.classList.add("hidden");
    footer.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
    footer.classList.remove("hidden");
  }
}

window.addEventListener("load", () => {
  const stored = localStorage.getItem("player");
  if (stored) {
    state.player = JSON.parse(stored);
  }

  if (!state.player.alias) {
    navigate("/register");
  } else {
    router();
  }
});

window.addEventListener("popstate", router);

export {}; // para evitar conflictos TS  
  // tsc && docker build -t pixel-theme . && docker run -p 3000:3000 pixel-theme
  // docker build -t pixel-theme .
  //  docker run -p 3000:3000 pixel-theme