import { navigate } from "../main.js";

export function ChatView(app: HTMLElement, state: any): void {
  app.innerHTML = `
    <div class="text-center mb-4">
        <h1 class="text-poke-yellow text-2xl">POKéMON</h1>
        <p class="text-poke-light text-xs">PONG</p>
    </div>
    <div class="bg-poke-light text-poke-dark border-3 border-poke-dark p-4 rounded-lg shadow-lg">
        <h2 class="text-sm leading-relaxed mb-4">CHAT</h2>
        <p class="text-sm leading-relaxed mb-4">Welcome, ${state.player.alias || "Player"}! THIS IS THE CHAAAAT.</p>
        <button id="goBackBtn3" class="bg-gradient-to-b from-poke-red to-red-700 text-poke-light py-2 border-3 border-poke-dark border-b-blue-900 rounded hover:from-red-500 hover:to-red-600 active:animate-press active:border-b-poke-dark">
            Go Back
        </button>
    </div>
  `;

  document.getElementById("goBackBtn3")?.addEventListener("click", () => navigate("/"));
}