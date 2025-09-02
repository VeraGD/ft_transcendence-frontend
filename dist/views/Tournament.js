import { navigate } from "../main.js";
export function TournamentView(app, state) {
    var _a;
    app.innerHTML = `
    <div class="text-center mb-4">
        <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
        <p class="text-poke-light text-xs">PONG</p>
    </div>
    <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h2 class="text-sm leading-relaxed mb-4">TOURNAMENT</h2>
        <p class="text-sm leading-relaxed mb-4">Welcome, ${state.player.alias || "Player"}! Classification.</p>
        <button id="goBackBtn2" class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
            Go Back
        </button>
    </div>
  `;
    (_a = document.getElementById("goBackBtn2")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => navigate("/"));
}
