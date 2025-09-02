import { navigate } from "../main";

export function HomeView(app: HTMLElement, state: any): void {
  app.innerHTML = `
    <div class="text-center mb-4">
        <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
        <p class="text-poke-light text-xs">PONG</p>
    </div>
    <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h1 class="text-sm leading-relaxed mb-4">[ ft Transcendence ]</h1>
        <p class="text-sm leading-relaxed mb-4">Welcome, ${state.player.user || "Player"}!</p>
        <button id="gameBtn" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
            Game
        </button>
        <button id="tournamentBtn" class="bg-gradient-to-b from-poke-blue to-blue-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-blue-500 hover:to-blue-600 active:animate-press active:border-b-poke-dark">
            Tournament
        </button>
        <button id="chatBtn" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
            Chat
        </button>
    </div>
  `;

  document.getElementById("gameBtn")?.addEventListener("click", () => navigate("/game"));
  document.getElementById("tournamentBtn")?.addEventListener("click", () => navigate("/tournament"));
  document.getElementById("chatBtn")?.addEventListener("click", () => navigate("/chat"));
}