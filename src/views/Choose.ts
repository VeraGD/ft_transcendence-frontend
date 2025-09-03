import { navigate } from "../main.js";
import { updateHeader } from "./Header.js";

export function ChooseView(app: HTMLElement, state: any): void {
  app.innerHTML = `
    <div class="text-center mb-4">
        <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
        <p class="text-poke-light text-xs">PONG</p>
    </div>
    <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h1 class="text-sm leading-relaxed mb-4">New avatar</h1>
        <button id="withABtn" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
            Choose new avatar
        </button>
        <button id="withoutABtn" class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
            Continue without avatar
        </button>
    </div>
  `;

  document.getElementById("withABtn")?.addEventListener("click", () => navigate("/avatar"));
  document.getElementById("withoutABtn")?.addEventListener("click", () => {
    state.player.avatar = 10;
    updateHeader(state);
    navigate("/");
  });
}