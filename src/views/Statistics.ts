import { navigate } from "../main.js";
import { t } from "../translations/index.js";

export function StatsView(app: HTMLElement, state: any): void {
    app.innerHTML = `
    <div class="bg-poke-light bg-opacity-60 text-poke-dark border-3 border-poke-dark p-6 rounded-lg shadow-lg max-w-sm mx-auto flex flex-col items-center text-center">
      <h1 class="text-sm leading-relaxed mb-4">${t("statistics")}</h1>

      <img src="/assets/avatar${state.player.avatar}.png"
        id="avBtn"
        class="w-40 h-40 rounded-full cursor-pointer hover:opacity-80 mb-6"/>

      <div class="w-full space-y-3 mb-6">
        <div class="flex justify-between items-center">
          <h2 class="text-sm leading-relaxed">${t("matchesPlayed")}:</h2>
          <span class="text-sm leading-relaxed text-blue-600">${state.player.matches}</span>
        </div>

        <div class="flex justify-between items-center">
          <h2 class="text-sm leading-relaxed">${t("victories")}:</h2>
          <span class="text-sm leading-relaxed">
            <span class="text-sm leading-relaxed text-blue-600">${state.player.victories}</span>
            <span class="text-sm leading-relaxed text-poke-dark">/</span>
            <span class="text-sm leading-relaxed text-red-600">${state.player.matches}</span>
          </span>
        </div>

        <div class="flex justify-between items-center">
          <h2 class="text-sm leading-relaxed">${t("defeats")}:</h2>
          <span class="text-sm leading-relaxed">
            <span class="text-sm leading-relaxed text-blue-600">${state.player.defeats}</span>
            <span class="text-sm leading-relaxed text-poke-dark">/</span>
            <span class="text-sm leading-relaxed text-red-600">${state.player.matches}</span>
          </span>
        </div>
      </div>

      <button id="goBackBtn" class="bg-poke-red bg-opacity-80 text-poke-light py-2 border-3 border-poke-red border-b-red-800 rounded hover:bg-gradient-to-b hover:from-red-500 hover:to-red-600 hover:border-b-red-800 active:animate-press active:border-b-red-800">
        ${t("goBack")}
      </button>
    </div>
  `;

  document.getElementById("goBackBtn")?.addEventListener("click", () => navigate("/"));
}
