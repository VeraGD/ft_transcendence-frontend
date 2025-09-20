import { navigate } from "../main.js";
import { t } from "../translations/index.js";

export function TournamentView(app: HTMLElement, state: any): void {
  app.innerHTML = `
    <div class="text-center mb-4">
        <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
        <p class="text-poke-light text-xs">PONG</p>
    </div>
    <div class="bg-poke-light bg-opacity-60 text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h2 class="text-sm leading-relaxed mb-4">${t("tournament")}</h2>
        <p class="text-sm leading-relaxed mb-4">${t("welcome_classification", { user: state.player.alias || "Player" })}</p>
        <button id="goBackBtn2" class="bg-poke-blue bg-opacity-80 text-poke-light py-2 border-3 border-b-blue-800 border-poke-blue rounded 
            hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-600 active:animate-press">
            ${t("go_back")}
        </button>
    </div>
  `;

  document.getElementById("goBackBtn2")?.addEventListener("click", () => navigate("/"));
};
